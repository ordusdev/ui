const mapToPortuguese = (key: string) => {
  const keys: Record<string, string> = {
    amount: 'Quantidade',
    date: 'Data',
    description: 'Descrição',
    name: 'Nome',
    price: 'Preço',
    status: 'Status',
    type: 'Tipo',
  }

  return keys[key] ?? ''
}

const mapValues = (key: string, value: any) => {
  const statuses = {
    pending: 'Pendente',
    paid: 'Pago',
    cancelled: 'Cancelado',
  }
  const keys: Record<string, any> = {
    amount: value,
    price: (value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
    date: new Date(value).toLocaleDateString('pt-BR'),
    description: value,
    name: value,
    status: statuses[value] || '--',
    type: value,
  }

  return keys[key] ?? '--'
}

export function useTableColumns() {
  return {
    getColumns: (keys: string[]) => {
      return keys.map(key => ({
        key,
        label: mapToPortuguese(key),
      }))
    },

    formatValues: (data: Record<string, any>[]) => {
      return data.map(key => {
        return {
          ...key,
          ...Object.fromEntries(
            Object.entries(key).map(([key, value]) => [
              key,
              mapValues(key, value),
            ]),
          ),
        }
      })
    },
  }
}
