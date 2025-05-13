export type Payment = {
  id: string
  amount: number
  price: number
  date: string
  description: string
  type: string
  status: 'pending' | 'paid' | 'cancelled'
}

export type PaymentsState = {
  payments: Payment[]
  addPayment: (payment: Payment) => void
  getByStatus: (status: 'pending' | 'paid' | 'cancelled') => Payment[]
  fetchPayments: () => void
}
