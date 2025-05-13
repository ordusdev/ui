import React from "react"
import { DashTemplate } from "../templates/dash.template"
import { TabOrganism } from "../organisms/tab.organism"
import { usePaymentsStore } from "../../../shared/store/usePayments.store"
import { TableMolecule } from "../molecules/table.molecule"
import { useTableColumns } from "../../../shared/hooks/useTableColumns.hook"

type PaymentsPage = {}

export const PaymentsPage: React.FC<PaymentsPage> = () => {
  const { payments, getByStatus } = usePaymentsStore()
  const { getColumns, formatValues } = useTableColumns()
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

  const tableData = formatValues(payments)
  const visibleKeys = ['name', 'description', 'type',  'status', 'amount', 'price', 'date']
    .filter(key => key in payments[0])
  const columns = getColumns(visibleKeys)
  const table = () => <TableMolecule columns={columns as any} data={tableData} orderBy={orderBy} onOrderBy={handleOrderBy as any}/>

  return (
    <DashTemplate>
      <TabOrganism 
        title={{ value: 'Pagamentos', icon: 'payment'}}
        tabs={[
          { label: 'Efetuados', key: 'paid', value: table() },
        ]}
        activeTab="paid"
        onTabChange={() => {}}
      />
    </DashTemplate>
  )
}