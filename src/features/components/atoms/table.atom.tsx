import React, { useState } from "react";
import IconConfig  from "../../../config/icons.config";
import { ButtonAtom } from "./button.atom";

type Column<T> = {
  key: keyof T;
  label: string;
};



const NextPageIcon = IconConfig.getIconByName('next-page')
const PreviousPageIcon = IconConfig.getIconByName('prev-page')
const LastPageIcon = IconConfig.getIconByName('last-page')
const FirstPageIcon = IconConfig.getIconByName('first-page')

const TablePagination: React.FC<{
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  goToPage: (page: number) => void;
}> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  goToPage,
}) => {
  return (
    <div className="flex justify-between items-center">
      <span className="ml-4 text-gray-500 text-xs">
        Página {currentPage} de {totalPages} | Exibindo de {(currentPage * itemsPerPage) - (itemsPerPage - 1)} à {Math.min(currentPage * itemsPerPage, totalItems)}
      </span>
      <div className="flex flex-wrap justify-center items-center gap-1 mt-4 text-sm text-gray-700">
        <ButtonAtom
          onClick={() => goToPage(1)}
          variant="secondary"
          disabled={currentPage === 1}
          className="px-1.5 py-0.5 rounded-full disabled:opacity-20"
        >
          <FirstPageIcon size={16}/>
        </ButtonAtom>
        <ButtonAtom
          onClick={() => goToPage(currentPage - 1)}
          variant="secondary"
          disabled={currentPage === 1}
          className="px-1.5 py-0.5 rounded-full disabled:opacity-20"
        >
          <PreviousPageIcon size={20}/> 
        </ButtonAtom>

        <span className="px-3 py-1.5 font-semibold  rounded-full bg-brand text-foreground-primary-light" >
          {currentPage}
        </span>

        <ButtonAtom
          variant="secondary"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-1.5 py-0.5 rounded-full disabled:opacity-20"
        >
          <NextPageIcon size={20} />
        </ButtonAtom>
        <ButtonAtom
          variant="secondary"
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-1.5 py-0.5 rounded-full disabled:opacity-20"
        >
          <LastPageIcon size={16}/>
        </ButtonAtom>

      </div>
    </div>
  )
}

type TableAtomProps<T> = {
  columns: Column<T>[];
  data: T[];
  renderCell?: (key: keyof T, item: T) => React.ReactNode;
  itemsPerPage?: number;
};

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
      head: "bg-background-tertiary text-foreground-primary",
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
      <div className="overflow-auto border-2 border-background-tertiary rounded-2xl w-full">
        <table className="min-w-full text-sm text-left rounded">
          <thead className={`${styles.primary.head} rounded`}>
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)} className="px-4 py-3 font-medium">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`${styles.primary.body} divide-y rounded`}>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-4 text-center text-gray-500">
                  Nenhum dado encontrado.
                </td>
              </tr>
            ) : (
              paginatedData.map((item, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-background-tertiary/60">
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

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        goToPage={goToPage}
      />
      
    </div>
  );
}
