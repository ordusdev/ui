import {
  Anchor,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  BadgeDollarSign,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  BowArrow,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  CircleDollarSign,
  CircleOff,
  ClockFading,
  CreditCard,
  Crown,
  DollarSign,
  Edit,
  ListFilterPlus,
  Mail,
  Phone,
  Receipt,
  Search,
  Trash,
  X,
} from 'lucide-react'

const icons = {
  anchor: Anchor,
  approved: CircleCheckBig,
  'bank-slit': BadgeDollarSign,
  'bow-arrow': BowArrow,
  close: X,
  crown: Crown,
  'credit-card': CreditCard,
  dollar: DollarSign,
  edit: Edit,
  'first-page': ChevronFirst,
  filter: ListFilterPlus,
  'last-page': ChevronLast,
  mail: Mail,
  'next-page': ChevronRight,
  'order-by-asc': ArrowUpNarrowWide,
  'order-by-desc': ArrowDownNarrowWide,
  payment: CircleDollarSign,
  phone: Phone,
  pix: Receipt,
  'prev-page': ChevronLeft,
  pending: ClockFading,
  recused: CircleOff,
  search: Search,
  tabs: BetweenVerticalStart,
  trash: Trash,
} as const

type Icons = keyof typeof icons

const getIconByName = (name: Icons) => {
  return icons[name]
}

const Config = {
  getIconByName,
}

export type { Icons }
export default Config
