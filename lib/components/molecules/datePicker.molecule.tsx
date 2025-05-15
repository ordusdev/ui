import React, { useEffect } from 'react'

import { MonthPickerAtom } from './../atoms/monthPicker.atom'
import { ButtonAtom } from '../atoms/button.atom'
import IconConfig from '../../config/icons.config'

type DatePickerMolecule = {
  minDate: Date,
  maxDate: Date
  onChange: (date: Date) => void
}

export const DatePickerMolecule: React.FC<DatePickerMolecule> = ({
  minDate,
  maxDate,
  onChange
}) => {
  const [selectedMonth, setSelectedMonth] = React.useState<{ year: number; month: number }>({
    year: minDate.getFullYear(),
    month: minDate.getMonth(),
  })
  const [selectedMonthDays, setSelectedMonthDays] = React.useState<Date[]>([])

  const isDateAvailable = (date: Date) => {
    const timestamp = date.getTime()
    return timestamp >= minDate.getTime() && timestamp <= maxDate.getTime()
  }

  const getMonthDays = () => {
    if(!selectedMonth) return [];
    const monthDays: Date[] = []
    const date = new Date(selectedMonth.year, selectedMonth.month, 1)
    while (date.getMonth() === selectedMonth.month) {
      // if (isDateAvailable(date)) {
      // }
      monthDays.push(date)
      date.setDate(date.getDate() + 1)
    }
    return monthDays
  }

  useEffect(() => {
    const days = getMonthDays()
    setSelectedMonthDays(days)
  }, [selectedMonth])

  const Next = IconConfig.getIconByName('next-page')
  const Previous = IconConfig.getIconByName('prev-page')


  return (
    <div className='w-full max-w-[540px]'>
      <div className="flex gap-2 items-end justify-between w-full">
        <MonthPickerAtom
          maxDate={{
            year: maxDate.getFullYear(),
            month: maxDate.getMonth(),
          }}
          minDate={{ year: minDate.getFullYear(), month: minDate.getMonth() }}
          selectedDate={selectedMonth}
          onChange={setSelectedMonth}
        />

        {selectedMonth && (
          <div className="flex h-10 gap-1">
            <ButtonAtom variant='tertiary'>
              <Previous className="w-4 h-4 text-foreground-primary" />
            </ButtonAtom>
            <ButtonAtom variant='tertiary'>
              <Next className="w-4 h-4 text-foreground-primary" />
            </ButtonAtom>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-1 mt-2 w-full">
        {selectedMonthDays.slice(0,3).map((date) => (
          <div className='h-40 w-full'>
            <ButtonAtom
              key={date.getTime()}
              variant="tertiary"
              onClick={() => onChange(date)}
              className="text-foreground-primary w-full h-full flex flex-col gap-2"
            >
              <span className="text-sm">
                {date.toLocaleDateString('pt-BR', {
                  weekday: 'short',
                })}
              </span>
              <span className='text-2xl'>
                {date.toLocaleDateString('pt-BR', {
                  day: 'numeric',
                })}
              </span>
              <span className='text-xs'>
               {3} agendamentos
              </span>
            </ButtonAtom>
          </div>
        ))}
      </div>
    </div>
  )
}
