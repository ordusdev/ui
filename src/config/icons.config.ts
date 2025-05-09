import {
  Anchor,
  BadgeDollarSign,
  BowArrow,
  CircleCheckBig,
  CircleOff,
  ClockFading,
  CreditCard,
  Crown,
  Receipt,
  Search,
  X,
} from 'lucide-react'

const icons = {
  anchor: Anchor,
  approved: CircleCheckBig,
  'bow-arrow': BowArrow,
  close: X,
  crown: Crown,
  'credit-card': CreditCard,
  pix: Receipt,
  'bank-slit': BadgeDollarSign,
  pending: ClockFading,
  recused: CircleOff,
  search: Search,
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
