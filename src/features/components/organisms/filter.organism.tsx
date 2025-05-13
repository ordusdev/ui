import React from "react";
import { SearchInputAtom } from "../atoms/searchInput.atom";
import { PickerAtom } from "../atoms/picker.atom";
import { Icons } from "../../../config/icons.config";

type FilterOrganism = {
  filters: {
    id: string;
    name: string;
    options: {
      label: string;
      value: string;
      icon: Icons
    }[];
  }[]
}

export const FilterOrganism: React.FC<FilterOrganism> = ({
  filters
}) => {
  return (
    <div className="w-full">
      <h2 className="text-foreground-primary">Filtros:</h2>
      <div className="w-full flex gap-2">
        <SearchInputAtom variant="secondary"/>
        <div className="flex flex-col gap-2">
          {filters.map(filter => (
            <PickerAtom key={filter.id} variant="secondary" options={filter.options} placeholder={filter.name} />
          ))}
        </div>
      </div>
    </div>
  );
};