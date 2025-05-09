import { useLayoutEffect } from 'react'

export function useTheme() {
  useLayoutEffect(() => {
    const root = window.document.documentElement
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    const stored = localStorage.getItem('theme')
    const theme = stored ?? (prefersDark ? 'dark' : 'light')

    root.classList.toggle('dark', theme === 'dark')
  }, [])
}
