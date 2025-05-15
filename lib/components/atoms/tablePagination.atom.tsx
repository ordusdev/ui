import React from "react";
import IconConfig  from "../../config/icons.config";
import { ButtonAtom } from "./button.atom";

const NextPageIcon = IconConfig.getIconByName('next-page')
const PreviousPageIcon = IconConfig.getIconByName('prev-page')
const LastPageIcon = IconConfig.getIconByName('last-page')
const FirstPageIcon = IconConfig.getIconByName('first-page')

type TablePaginationAtom = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  goToPage: (page: number) => void;
}

export const TablePaginationAtom: React.FC<TablePaginationAtom> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  goToPage,
}) => {
  return (
    <div className="flex justify-center items-center flex-wrap md:justify-between">
      <span className="ml-4 text-gray-500 text-xs">
        Página {currentPage} de {totalPages} | Exibindo de {(currentPage * itemsPerPage) - (itemsPerPage - 1)} à {Math.min(currentPage * itemsPerPage, totalItems)} de um total de {totalItems} itens
      </span>
      <div className="flex flex-wrap justify-center items-center gap-0.5 mt-2 text-sm text-gray-700">
        <ButtonAtom
          onClick={() => goToPage(1)}
          variant="transparent"
          disabled={currentPage === 1}
          className="px-[8px] py-[4px] rounded-full disabled:opacity-20"
        >
          <FirstPageIcon size={16}/>
        </ButtonAtom>
        <ButtonAtom
          onClick={() => goToPage(currentPage - 1)}
          variant="transparent"
          disabled={currentPage === 1}
          className="px-[8px] py-[4px] rounded-full disabled:opacity-20"
        >
          <PreviousPageIcon size={18}/> 
        </ButtonAtom>

        {currentPage - 1 >= 1 && (
          <span className="px-[8px] py-[2px] font-semibold  rounded-full bg-background-tertiary text-foreground-primary cursor-pointer" onClick={() => goToPage(currentPage - 1)}>
            {currentPage - 1}
          </span>
        )}

        <span className="px-[10px] py-[4px] font-semibold  rounded-full bg-brand text-foreground-primary-light" >
          {currentPage}
        </span>

        {currentPage + 1 <= totalPages && (
          <span className="px-[8px] py-[2px] font-semibold  rounded-full bg-background-tertiary text-foreground-primary cursor-pointer" onClick={() => goToPage(currentPage + 1)} >
            {currentPage + 1}
          </span>
        )}

        <ButtonAtom
          variant="transparent"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-[8px] py-[4px] rounded-full disabled:opacity-20"
        >
          <NextPageIcon size={18} />
        </ButtonAtom>
        <ButtonAtom
          variant="transparent"
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-[8px] py-[4px] rounded-full disabled:opacity-20"
        >
          <LastPageIcon size={16}/>
        </ButtonAtom>

      </div>
    </div>
  )
}
