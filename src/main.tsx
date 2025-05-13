import React, { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ButtonAtom } from './features/components/atoms/button.atom'
import { SearchInputAtom } from './features/components/atoms/searchInput.atom'
import { useTheme } from './shared/hooks/useTheme.hook'
import { PickerAtom } from './features/components/atoms/picker.atom'

import IconConfig from './config/icons.config'
import { SidebarAtom } from './features/components/atoms/sidebar.atom'
import { ChartAtom } from './features/components/atoms/chart.atom'
import { TableMolecule } from './features/components/molecules/table.molecule'
import { TabNavigationMolecule } from './features/components/molecules/tabNavigation.molecule'
import { FilterOrganism } from './features/components/organisms/filter.organism'
import { PaymentsPage } from './features/components/pages/payments.page'


const App = () => {
  useTheme()

  const TrashIcon = IconConfig.getIconByName('trash')
  const MailIcon = IconConfig.getIconByName('mail')
  const PhoneIcon = IconConfig.getIconByName('phone')

  const data = [
    {
      name: 'John Doe',
      email: 'TjK5t@example.com',
      phone: '123-456-7890',
      city: 'New York',
      cpf: '123.456.789-00',
    },
    {
      name: 'João Doe',
      email: 'T982738@example.com',
      phone: '345-678-9012',
      city: 'Los Angeles',
      cpf: '987.654.321-00',
    },
    {
      name: 'Maria Silva',
      email: 'maria.silva@example.com',
      phone: '998-123-4567',
      city: 'São Paulo',
      cpf: '321.654.987-01',
    },
    {
      name: 'Carlos Pereira',
      email: 'carlos.p@example.com',
      phone: '987-654-3210',
      city: 'Rio de Janeiro',
      cpf: '456.789.123-02',
    },
    {
      name: 'Emily Johnson',
      email: 'emily.j@example.com',
      phone: '555-123-4567',
      city: 'Chicago',
      cpf: '789.123.456-03',
    },
    {
      name: 'Pedro Oliveira',
      email: 'pedro.o@example.com',
      phone: '321-987-6543',
      city: 'Belo Horizonte',
      cpf: '147.258.369-04',
    },
    {
      name: 'Lucas Lima',
      email: 'lucas.l@example.com',
      phone: '888-777-6666',
      city: 'Fortaleza',
      cpf: '258.369.147-05',
    },
    {
      name: 'Sophia Costa',
      email: 'sophia.c@example.com',
      phone: '999-555-3333',
      city: 'Curitiba',
      cpf: '369.147.258-06',
    },
    {
      name: 'Daniel Souza',
      email: 'daniel.s@example.com',
      phone: '123-321-1234',
      city: 'Porto Alegre',
      cpf: '741.852.963-07',
    },
    {
      name: 'Olivia Brown',
      email: 'olivia.b@example.com',
      phone: '444-333-2222',
      city: 'San Francisco',
      cpf: '852.963.741-08',
    },
    {
      name: 'Fernando Rocha',
      email: 'fernando.r@example.com',
      phone: '555-000-1111',
      city: 'Recife',
      cpf: '963.741.852-09',
    },
    {
      name: 'Julia Fernandes',
      email: 'julia.f@example.com',
      phone: '666-111-2222',
      city: 'Manaus',
      cpf: '159.357.486-10',
    },
    {
      name: 'André Martins',
      email: 'andre.m@example.com',
      phone: '777-888-9999',
      city: 'Salvador',
      cpf: '753.951.258-11',
    },
    {
      name: 'Laura Almeida',
      email: 'laura.a@example.com',
      phone: '888-999-0000',
      city: 'Brasília',
      cpf: '456.321.789-12',
    },
    {
      name: 'Bruno Teixeira',
      email: 'bruno.t@example.com',
      phone: '222-333-4444',
      city: 'Florianópolis',
      cpf: '789.654.123-13',
    },
    {
      name: 'Amanda Ribeiro',
      email: 'amanda.r@example.com',
      phone: '111-222-3333',
      city: 'Natal',
      cpf: '321.987.654-14',
    },
    {
      name: 'Gabriel Nunes',
      email: 'gabriel.n@example.com',
      phone: '999-111-7777',
      city: 'Belém',
      cpf: '987.123.654-15',
    },
  ];
  
  const [orderBy, setOrderBy] = React.useState<{ key: string; order: 'asc' | 'desc' }>({
    key: Object.keys(data[0])[0] as keyof typeof data[0],
    order: 'asc',
  })

  const orderedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (a[orderBy.key] < b[orderBy.key]) {
        return orderBy.order === 'asc' ? -1 : 1
      }
      if (a[orderBy.key] > b[orderBy.key]) {
        return orderBy.order === 'asc' ? 1 : -1
      }
      return 0
    })
  }, [data, orderBy])

  const handleOrderBy = (key: string) => {
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

  const [currentTab, setCurrentTab] = useState('pedidos');

  return (
    <>
      <SidebarAtom />
      <div className="pl-20 group-hover:pl-48  transition-all duration-300 min-h-screen flex pt-20 px-8 items-center justify-start bg-background-primary flex-col">
        
        
        <div className="w-full max-w-[85%] flex flex-col gap-2 justify-center">
          <div className="flex gap-2 flex-col">
           <FilterOrganism
            filters={[
              {
                id: 'name',
                name: 'Nome',
                options: [
                  {
                    label: 'A',
                    value: 'A',
                    icon: 'anchor',
                  },
                ],
              }
            ]}
           />
          

          <TabNavigationMolecule
            activeTab={currentTab}
            tabs={[
              { label: 'Pedidos', value: 'pedidos', key: 'pedidos' },
              { label: 'Clientes', value: <TableMolecule
                itemsPerPage={10}
                onItemClick={(item) => console.log(item)}
                onOrderBy={handleOrderBy}
                orderBy={orderBy}
                columns={[{
                  key: 'name',
                  label: 'Nome',
                }, {
                  key: 'email',
                  label: 'Email',
                }, {
                  key: 'cpf',
                  label: 'CPF',
                }, {
                  key: 'phone',
                  label: 'Telefone',
                }, {
                  key: 'city',
                  label: 'Cidade',
                },
                ]}
                data={orderedData}
                renderCell={(key, item) => {
                  if(key === 'email') {
                    return (
                      <div className='flex gap-2'>
                        <a className='flex gap-2 text-brand-dark' href={`mailto:${item[key]}`}>
                          <MailIcon className="w-5 h-5 text-brand-gray"/>
                        </a>
                        {item[key]}
                      </div>
                    )
                  }
                  if(key === 'phone') {
                    return (
                      <div className="flex gap-2">
                        <a className='flex gap-2 text-brand-dark' href={`tel:${item[key]}`}>
                          <PhoneIcon className="w-5 h-5 text-brand-gray"/>
                        </a>
                        {item[key]}
                      </div>
                    )
                  }
                  return item[key]
                }}
              />, key: 'clientes' },
            ]}
            onTabChange={setCurrentTab}
          />
        </div>

        </div>
      </div> 
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App/> */}
    <PaymentsPage/>
  </StrictMode>,
)
