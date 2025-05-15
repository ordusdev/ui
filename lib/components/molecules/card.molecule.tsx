import React, { ComponentProps } from "react"
import IconConfig, { Icons } from "../../config/icons.config"
import { ButtonAtom } from "../atoms/button.atom"
type CardMolecule = {
  children: React.ReactNode
  icon: Icons,
  title: string,
  editing?: boolean,
  onEdit?: () => void
  onSave?: () => void
  variant?: 'primary' | 'secondary' | 'tertiary' | 'transparent'
} & ComponentProps<'form'>

export const CardMolecule: React.FC<CardMolecule> = ({children, title, icon, editing, variant, onEdit, onSave, onSubmit, className, ...rest}) => {
  const Icon = IconConfig.getIconByName(icon ?? 'list')
  const EditIcon = IconConfig.getIconByName('edit')
  const SaveIcon = IconConfig.getIconByName('save')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(e)
    onSave?.()
  }

  const handleButtonClick = () => {
    editing && onSave?.()
    onEdit?.()
  }

  const styles = {
    primary: "bg-background-primary text-foreground-primary",
    secondary: "bg-background-secondary text-foreground-secondary",
    tertiary: "bg-background-tertiary text-foreground-secondary",
    transparent: "bg-transparent text-foreground-secondary"
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-1 w-full select-none rounded-lg p-4 ${styles[variant ?? 'secondary']} ${className}`} {...rest}>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Icon className="w-8 h-8 text-foreground-primary"/>
            <h1 className="text-foreground-primary text-lg font-medium">{title ?? 'Card Title'}</h1>
          </div>
          {editing !== undefined && (
            <ButtonAtom variant={editing ? 'primary' : 'tertiary'} onClick={handleButtonClick}>
              {editing ? <SaveIcon className="w-4 h-4"/> : <EditIcon className="w-4 h-4"/>
              }
            </ButtonAtom>
          )}
        </div>
        <div className="flex flex-wrap w-full gap-2 px-1">
          {children}
        </div>
      </form>  
    </>
  )
}