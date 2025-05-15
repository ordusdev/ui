import React from "react"
import { DashTemplate, TableMolecule, TabOrganism } from '@ordus/ui'
import { usePaymentsStore } from "../../../shared/store/usePayments.store"
import { useTableColumns } from "../../../shared/hooks/useTableColumns.hook"
import { ProfilePage } from "./profile.page"

type PaymentsPage = {}

export const PaymentsPage: React.FC<PaymentsPage> = () => {
  const { payments, getByStatus } = usePaymentsStore()
  const { getColumns, formatValues } = useTableColumns()
  const [currentTab, setCurrentTab] = React.useState('pending')
  const [orderBy, setOrderBy] = React.useState<{ key: string; order: 'asc' | 'desc' }>({ key: Object.keys(payments[0])[3] as keyof typeof payments[0], order: 'desc' })
  
  const handleOrderBy = (key: string ) => {
    setOrderBy((prevOrderBy) => {
      if (prevOrderBy.key === key) {
        return {
          key,
          order: prevOrderBy.order === 'asc' ? 'desc' : 'asc',
        }
      }
      return {
        key,
        order: 'asc',
      }
    })
  }

  const datas = {
    pending: getByStatus('pending'),
    paid: getByStatus('paid'),
    cancelled: getByStatus('cancelled'),
  }
  const tableData = currentTab === 'all' ? formatValues(payments) : formatValues(datas[currentTab] || [])
  const visibleKeys = ['name', 'description', 'type',  currentTab === 'all' ? 'status' : '', 'amount', 'price', 'date']
    .filter(key => key in payments[0])
  const columns = getColumns(visibleKeys)
  const table = (data) => {
    return (
      <>
        <h1 className="font-semibold text-xl text-foreground-primary">Pagamentos {currentTab === 'all' ? '' : `(${currentTab})`}</h1>
        <TableMolecule columns={columns as any} data={data} orderBy={orderBy} onOrderBy={handleOrderBy as any}/>
      </>
    )
  }

  return (
    <DashTemplate>
      <TabOrganism 
        title={{ value: 'Pagamentos', icon: 'payment'}}
        tabs={[
          { label: 'Todos', key: 'all', value: table(tableData), icon: 'list' },
          { label: 'Efetivados', key: 'paid', value: table(tableData), icon: 'done' },
          { label: 'Pendente', key: 'pending', value: table(tableData), icon: 'pending' },
          { label: 'Cancelados', key: 'cancelled', value: table(tableData), icon: 'recused' },
          { label: 'Perfil', key: 'profile', value: <ProfilePage/>, icon: 'user' },
        ]}
        activeTab={currentTab}
        onTabChange={setCurrentTab}
      />
      {/* <DatePickerMolecule minDate={new Date('2023-01-01')} maxDate={new Date()} onChange={() => {}}/> */}
      
    </DashTemplate>
  )
}