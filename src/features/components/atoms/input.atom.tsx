import type { ComponentProps } from "react";
import React from "react";

type InputAtom = {
  variant: 'primary' | 'secondary'
  label?: string
} & ComponentProps<'input'>

export const InputAtom: React.FC<InputAtom> = ({ variant, label, className, ...props}) => {
  const styles = {
    primary: 'bg-background-primary text-foreground-primary',
    secondary: 'bg-background-secondary text-foreground-secondary'
  }

  const labelStyles = {
    primary: 'text-foreground-secondary',
    secondary: 'text-foreground-secondary'
  }

  return (
    <div className="flex flex-col w-full">
      {label && (<label className={`${labelStyles[variant]}`}>{label}</label>)}
      <input
        {...props}
        className={`${styles[variant]} px-4 py-2 ${className} rounded`}
      />
    </div>
  )
}