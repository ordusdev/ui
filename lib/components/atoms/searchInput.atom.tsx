import type { ComponentProps } from "react";
import React from "react";
import { InputAtom } from "./input.atom";
import { ButtonAtom } from "./button.atom";
import IconConfig from '../../config/icons.config';

type SearchInputAtom = {
  variant: 'primary' | 'secondary'
} & ComponentProps<'input'>

export const SearchInputAtom: React.FC<SearchInputAtom> = ({ variant, placeholder, ...props}) => {
  const Search = IconConfig.getIconByName('search')
  return (
    <div className="flex relative w-full">
      <InputAtom variant={variant} {...props} placeholder={placeholder ?? 'Buscar'} className="pr-16"/>
      <ButtonAtom variant='primary' className="absolute right-0 bottom-0 top-0 h-10">
        <Search className="w-5 h-5 text-gray-200"/>
      </ButtonAtom>
    </div>
  )
}