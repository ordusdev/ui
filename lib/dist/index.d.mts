import * as react from 'react';
import react__default, { ComponentProps } from 'react';
import * as lucide_react from 'lucide-react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type ButtonAtom = {
    variant: 'primary' | 'secondary' | 'tertiary' | 'transparent';
} & ComponentProps<'button'>;
declare const ButtonAtom: react__default.FC<ButtonAtom>;

type ChartType = "pie" | "donut" | "bar" | "line";
type Series = {
    key: string;
    name: string;
    color?: string;
};
type ChartAtom = {
    type: ChartType;
    data: any[];
    series: Series[];
    nameKey?: string;
    height?: number;
};
declare const ChartAtom: react__default.FC<ChartAtom>;

type InputAtom = {
    variant: 'primary' | 'secondary' | 'tertiary';
    label?: string;
    error?: string;
} & ComponentProps<'input'>;
declare const InputAtom: react__default.FC<InputAtom>;

type MonthYear = {
    year: number;
    month: number;
};
type MonthPickerAtomProps = {
    minDate: MonthYear;
    maxDate: MonthYear;
    selectedDate?: MonthYear;
    onChange: (date: MonthYear) => void;
};
declare const MonthPickerAtom: react__default.FC<MonthPickerAtomProps>;

declare const icons: {
    readonly 'add-user': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly address: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly anchor: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly approved: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'bank-slit': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'bow-arrow': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly calendar: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly contact: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly close: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly crown: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'credit-card': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly city: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly dollar: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly done: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly edit: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'edit-user': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'first-page': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly filter: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'hide-password': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'last-page': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly list: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly locate: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly mail: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly map: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'map-marker': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'next-page': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'order-by-asc': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'order-by-desc': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly payment: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly phone: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly pix: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'prev-page': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly pending: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly recused: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly save: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly search: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'show-password': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly tabs: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly trash: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly user: react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
    readonly 'user-config': react.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
};
type Icons = keyof typeof icons;

type Option = {
    label: string;
    value: string;
    icon: Icons;
};
type PickerAtom = {
    variant: "primary" | "secondary" | 'tertiary';
    icon?: Icons;
    label?: string;
    options: Option[];
} & Omit<ComponentProps<"input">, "">;
declare const PickerAtom: react__default.FC<PickerAtom>;

type SearchInputAtom = {
    variant: 'primary' | 'secondary';
} & ComponentProps<'input'>;
declare const SearchInputAtom: react__default.FC<SearchInputAtom>;

declare function SidebarAtom(): react_jsx_runtime.JSX.Element;

type TablePaginationAtom = {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    goToPage: (page: number) => void;
};
declare const TablePaginationAtom: react__default.FC<TablePaginationAtom>;

type CardMolecule = {
    children: react__default.ReactNode;
    icon: Icons;
    title: string;
    editing?: boolean;
    onEdit?: () => void;
    onSave?: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'transparent';
} & ComponentProps<'form'>;
declare const CardMolecule: react__default.FC<CardMolecule>;

type DatePickerMolecule = {
    minDate: Date;
    maxDate: Date;
    onChange: (date: Date) => void;
};
declare const DatePickerMolecule: react__default.FC<DatePickerMolecule>;

type Column<T> = {
    key: keyof T;
    label: string;
};
type TableMoleculeProps<T> = {
    columns: Column<T>[];
    data: T[];
    renderCell?: (key: keyof T, item: T) => react__default.ReactNode;
    itemsPerPage?: number;
    onItemClick?: (item: T) => void;
    onOrderBy?: (key: keyof T, order: "asc" | "desc") => void;
    orderBy?: {
        key: keyof T;
        order: "asc" | "desc";
    };
};
declare function TableMolecule<T extends Record<string, any>>({ columns, data, renderCell, itemsPerPage, onItemClick, onOrderBy, orderBy, }: TableMoleculeProps<T>): react_jsx_runtime.JSX.Element | null;

type Tab = {
    label: string;
    key: string;
    value: react__default.ReactNode;
    icon: Icons;
};
type TabNavigationMolecule = {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (key: string) => void;
    className?: string;
};
declare const TabNavigationMolecule: react__default.FC<TabNavigationMolecule>;

type FilterOrganism = {
    filters: {
        id: string;
        name: string;
        options: {
            label: string;
            value: string;
            icon: Icons;
        }[];
    }[];
};
declare const FilterOrganism: react__default.FC<FilterOrganism>;

type TabOrganism = {
    title: {
        value: string;
        icon: Icons;
    };
    tabs: {
        label: string;
        key: string;
        value: react__default.ReactNode;
        icon: Icons;
    }[];
    activeTab: string;
    onTabChange: (tab: string) => void;
};
declare const TabOrganism: react__default.FC<TabOrganism>;

type DashTemplate = {
    children: react__default.ReactNode;
};
declare const DashTemplate: react__default.FC<DashTemplate>;

type LoginTemplate = {
    children: react__default.ReactNode;
    bgImage?: string;
};
declare const LoginTemplate: react__default.FC<LoginTemplate>;

export { ButtonAtom, CardMolecule, ChartAtom, DashTemplate, DatePickerMolecule, FilterOrganism, InputAtom, LoginTemplate, MonthPickerAtom, PickerAtom, SearchInputAtom, SidebarAtom, TabNavigationMolecule, TabOrganism, TableMolecule, TablePaginationAtom };
