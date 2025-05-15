import { create } from 'zustand'
import { Payment, PaymentsState } from '../../types/payment.type'

export const usePaymentsStore = create<PaymentsState>((set, get) => ({
  payments: [
    {
      amount: 1,
      price: 1890,
      date: '2023-08-01',
      description: 'Pagamento de boleto',
      id: '1',
      status: 'pending',
      type: 'boleto',
    },
    {
      price: 1890,
      amount: 2,
      date: '2023-08-01',
      description: 'Pagamento de boleto',
      id: '2',
      status: 'paid',
      type: 'boleto',
    },
    {
      price: 1890,
      amount: 3,
      date: '2023-08-01',
      description: 'Pagamento de boleto',
      id: '3',
      status: 'cancelled',
      type: 'boleto',
    },
    {
      price: 2490,
      amount: 1,
      date: '2023-09-01',
      description: 'Pagamento de fatura',
      id: '4',
      status: 'cancelled',
      type: 'credit-card',
    },
    {
      price: 2790,
      amount: 1,
      date: '2023-10-01',
      description: 'Pagamento de fatura',
      id: '5',
      status: 'pending',
      type: 'credit-card',
    },
    {
      price: 2990,
      amount: 1,
      date: '2023-11-01',
      description: 'Pagamento de fatura',
      id: '6',
      status: 'paid',
      type: 'credit-card',
    },
    {
      price: 3190,
      amount: 1,
      date: '2023-12-01',
      description: 'Pagamento de fatura',
      id: '7',
      status: 'paid',
      type: 'pix',
    },
  ],

  addPayment: (payment: Payment) =>
    set(state => ({ payments: [...state.payments, payment] })),

  getByStatus: (status: 'pending' | 'paid' | 'cancelled') => {
    const { payments } = get()
    return payments.filter(payment => payment.status === status)
  },

  fetchPayments: () => {
    // fetch('/api/payments')
    //   .then(res => res.json())
    //   .then((data: Payment[]) => set({ payments: data }))
  },
}))
