import React from "react";
import { PickerAtom } from "./picker.atom";

type MonthYear = {
  year: number;
  month: number; // 0 = Janeiro
};

type MonthPickerAtomProps = {
  minDate: MonthYear;
  maxDate: MonthYear;
  selectedDate?: MonthYear;
  onChange: (date: MonthYear) => void;
};

const monthLabels = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

export const MonthPickerAtom: React.FC<MonthPickerAtomProps> = ({
  minDate,
  maxDate,
  selectedDate,
  onChange
}) => {
  const generateMonthRange = () => {
    const dates: MonthYear[] = [];
    let { year: y, month: m } = minDate;

    while (y < maxDate.year || (y === maxDate.year && m <= maxDate.month)) {
      dates.push({ year: y, month: m });
      m++;
      if (m > 11) {
        m = 0;
        y++;
      }
    }

    return dates;
  };

  const options = generateMonthRange().map(({ month, year }) => ({
    label: `${monthLabels[month]} ${year}`,
    value: `${year}-${String(month + 1).padStart(2, '0')}`,
    icon: 'calendar'
  }));

  const handleChange = (value: string) => {
    const [year, monthStr] = value.split('-');
    onChange({
      year: Number(year),
      month: Number(monthStr) - 1
    });
  };

  const selectedValue = selectedDate ? `${selectedDate.year}-${String(selectedDate.month + 1).padStart(2, '0')}`: '';

  return (
    <div className="flex w-56">
      <PickerAtom
        variant="secondary"
        label="Selecione um mês"
        options={options as any}
        value={selectedValue}
        onChange={handleChange as any}
        placeholder="Mês"
        icon="calendar"
      />
    </div>
  );
};
