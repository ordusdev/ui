import React, { useState } from "react";
import { TablePaginationAtom } from "../atoms/tablePagination.atom";

type Column<T> = {
  key: keyof T;
  label: string;
};

type TableMoleculeProps<T> = {
  columns: Column<T>[];
  data: T[];
  renderCell?: (key: keyof T, item: T) => React.ReactNode;
  itemsPerPage?: number;
  onItemClick?: (item: T) => void;
};

export function TableMolecule<T extends Record<string, any>>({
  columns,
  data,
  renderCell,
  itemsPerPage = 10,
  onItemClick,
}: TableMoleculeProps<T>) {
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
                <tr key={rowIndex} className={`hover:bg-background-tertiary/60 ${onItemClick ? 'cursor-pointer' : ''}`} title={item.name} onClick={() => onItemClick?.(item)}>
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

      <TablePaginationAtom
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        goToPage={goToPage}
      />
      
    </div>
  );
}
