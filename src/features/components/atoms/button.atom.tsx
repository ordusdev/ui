import type { ComponentProps } from "react";
import React from "react";

type ButtonAtom = {
  variant: 'primary' | 'secondary' | 'tertiary' | 'transparent'
} & ComponentProps<'button'>

export const ButtonAtom: React.FC<ButtonAtom> = ({ variant, className, ...props}) => {
  const styles = {
    primary: 'bg-brand text-white',
    secondary: 'bg-brand-light text-black',
    tertiary: 'bg-background-tertiary text-black',
    transparent: 'bg-transparent text-foreground-secondary'
  }

  return (
    <button
      {...props}
      className={`${styles[variant]} ${className} px-4 py-2 rounded`}
    />
  )
}