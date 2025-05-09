import React, { useState } from "react";
import IconConfig  from "../../../config/icons.config";
import { ButtonAtom } from "./button.atom";

type Column<T> = {
  key: keyof T;
  label: string;
};

type TableAtomProps<T> = {
  columns: Column<T>[];
  data: T[];
  renderCell?: (key: keyof T, item: T) => React.ReactNode;
  itemsPerPage?: number;
};


const NextPageIcon = IconConfig.getIconByName('next-page')
const PreviousPageIcon = IconConfig.getIconByName('prev-page')
const LastPageIcon = IconConfig.getIconByName('last-page')
const FirstPageIcon = IconConfig.getIconByName('first-page')

export function TableAtom<T extends Record<string, any>>({
  columns,
  data,
  renderCell,
  itemsPerPage = 10,
}: TableAtomProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const styles = {
    primary: {
      head: "bg-brand-dark text-foreground-primary",
      body: "bg-background-secondary text-foreground-secondary",
    },
    secondary: {
      head: "bg-background-secondary text-foreground-secondary",
      body: "bg-background-secondary text-foreground-secondary",
    },
  };

  if (columns.length === 0) return null;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="w-full">
      <div className="overflow-auto border-2 border-brand-dark rounded-full-lg w-full">
        <table className="min-w-full text-sm text-left">
          <thead className={styles.primary.head}>
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)} className="px-4 py-3 font-medium">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`${styles.primary.body} divide-y`}>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-4 text-center text-gray-500">
                  Nenhum dado encontrado.
                </td>
              </tr>
            ) : (
              paginatedData.map((item, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-brand-dark/50">
                  {columns.map((col) => (
                    <td key={String(col.key)} className="px-4 py-1">
                      {renderCell ? renderCell(col.key, item) : item[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-1 mt-4 text-sm text-gray-700">
        <ButtonAtom
          onClick={() => goToPage(1)}
          variant="secondary"
          disabled={currentPage === 1}
          className="px-2 py-1 rounded-full disabled:opacity-20"
        >
          <FirstPageIcon size={16}/>
        </ButtonAtom>
        <ButtonAtom
          onClick={() => goToPage(currentPage - 1)}
          variant="secondary"
          disabled={currentPage === 1}
          className="px-2 py-1 rounded-full disabled:opacity-20"
        >
          <PreviousPageIcon size={20}/> 
        </ButtonAtom>

        <span className="px-4 py-2 font-semibold  rounded-full bg-brand text-foreground-primary-light" >
          {currentPage}
        </span>

        <ButtonAtom
          variant="secondary"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded-full disabled:opacity-20"
        >
          <NextPageIcon size={20} />
        </ButtonAtom>
        <ButtonAtom
          variant="secondary"
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 rounded-full disabled:opacity-20"
        >
          <LastPageIcon  size={16}/>
        </ButtonAtom>

      </div>
        <span className="ml-4 text-gray-500 ">
          Página {currentPage} de {totalPages}
        </span>
    </div>
  );
}
