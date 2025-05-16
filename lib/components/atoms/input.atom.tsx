import type { ComponentProps } from "react";
import React, { useState } from "react";
import { ButtonAtom } from "./button.atom";
import IconConfig from "../../config/icons.config";

type InputAtom = {
  variant: 'primary' | 'secondary' | 'tertiary'
  label?: string
  error?: string
} & ComponentProps<'input'>

export const InputAtom: React.FC<InputAtom> = ({ variant, label, className, disabled, type, error, ...props}) => {
  const styles = {
    primary: 'bg-background-primary text-foreground-primary',
    secondary: 'bg-background-secondary text-foreground-secondary',
    tertiary: 'bg-background-tertiary text-foreground-secondary'
  }

  const labelStyles = {
    primary: 'text-foreground-secondary',
    secondary: 'text-foreground-secondary',
    tertiary: 'text-foreground-secondary'
  }

  const [showPassword, setShowPassword] = useState(false);
  const PasswordShowIcon = IconConfig.getIconByName('show-password')
  const PasswordHideIcon = IconConfig.getIconByName('hide-password')

  return (
    <>
      <div className="flex flex-col w-full relative">
        {label && (<label className={`${labelStyles[variant]} ${disabled && 'opacity-70'}`}>{label}</label>)}
        <input
          disabled={disabled}
          type={type === 'password' ? showPassword ? 'text' : 'password' : type}
          {...props}
          className={`${styles[variant]} px-4 py-2 ${className} ${error && 'border border-red-500 text-red-500 placeholder:text-red-500/80'} rounded disabled:opacity-50 disabled:cursor-not-allowed`}
        />
        {type === 'password' && (
          <ButtonAtom type="button" variant="transparent" className="absolute top-1/2 -translate-y-1 right-0 flex items-center justify-center">
            <span className="text-xs text-foreground-secondary" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <PasswordHideIcon className="w-4 h-4"/> : <PasswordShowIcon className="w-4 h-4"/>}
            </span>
          </ButtonAtom>
        )}
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </>
  )
}