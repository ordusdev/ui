import type { ComponentProps } from "react";

type ButtonAtom = {
  variant: 'primary' | 'secondary'
} & ComponentProps<'button'>

export const ButtonAtom: React.FC<ButtonAtom> = ({ variant, className, ...props}) => {
  const styles = {
    primary: 'bg-brand text-white',
    secondary: 'bg-brand-light text-black'
  }

  return (
    <button
      {...props}
      className={`${styles[variant]} ${className} px-4 py-2 rounded`}
    />
  )
}