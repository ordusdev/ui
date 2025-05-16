import React, { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react'

type PopoverContextType = {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLDivElement>
  contentRef: React.RefObject<HTMLDivElement>
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined)

function usePopoverContext() {
  const context = useContext(PopoverContext)
  if (!context) throw new Error('Popover subcomponent must be used within <Popover>')
  return context
}

interface PopoverRootProps {
  children: ReactNode
}

function PopoverRoot({ children }: PopoverRootProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
        && contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef, contentRef }}>
      <div className="relative inline-block">{children}</div>
    </PopoverContext.Provider>
  )
}

interface TriggerProps {
  children: ReactNode
}

function Trigger({ children }: TriggerProps) {
  const { setOpen, open, triggerRef } = usePopoverContext()

  const handleOpen = () => {
    setTimeout(() => setOpen(!open), 200)
  }

  return (
    <div
      ref={triggerRef}
      onClick={handleOpen}
      className="cursor-pointer inline-flex items-center"
    >
      {children}
    </div>
  )
}

interface ContentProps {
  children: ReactNode
  className?: string
}

function Content({ children, className = '' }: ContentProps) {
  const { open, triggerRef, contentRef } = usePopoverContext()
  const [position, setPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      console.log(rect)
      rect.x > window.innerWidth/3 ? setPosition({
        top: rect.height + 10,
        left: -rect.width * 2 - 10,
      }) :
      setPosition({
        top: rect.height/2 ,
        left: rect.width + 10,
      })
    }
  }, [open])

  if (!open) return null

  return (
    <div
      ref={contentRef}
      className={`absolute z-50 bg-background-secondary border border-foreground-tertiary rounded-xl shadow-lg p-3 ${className}`}
      style={{ top: position.top, left: position.left }}
    >
      {children}
    </div>
  )
}

// Exportando com namespace
export const Popover = Object.assign(PopoverRoot, {
  Trigger,
  Content,
})
