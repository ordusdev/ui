import {
  Anchor,
  BadgeDollarSign,
  BowArrow,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  CircleCheckBig,
  CircleOff,
  ClockFading,
  CreditCard,
  Crown,
  Edit,
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
  'bow-arrow': BowArrow,
  close: X,
  crown: Crown,
  'credit-card': CreditCard,
  edit: Edit,
  'first-page': ChevronFirst,
  'last-page': ChevronLast,
  mail: Mail,
  'next-page': ChevronRight,
  phone: Phone,
  pix: Receipt,
  'prev-page': ChevronLeft,
  'bank-slit': BadgeDollarSign,
  pending: ClockFading,
  recused: CircleOff,
  search: Search,
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
