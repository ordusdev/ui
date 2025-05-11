import React, { StrictMode } from 'react'
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


const App = () => {
  useTheme()

  const TrashIcon = IconConfig.getIconByName('trash')
  const MailIcon = IconConfig.getIconByName('mail')
  const PhoneIcon = IconConfig.getIconByName('phone')

  return (
    <>
      <SidebarAtom />
      <div className="pl-20 group-hover:pl-48  transition-all duration-300 min-h-screen flex pt-20 px-8 items-center justify-start bg-background-primary flex-col">
        
        
        <div className="w-full max-w-[85%] flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex w-80">
              <SearchInputAtom variant='secondary'/>
            </div>
            
            <h2 className='text-md text-foreground-primary'>Filtros:</h2>
            <div className="flex w-64 gap-2">
              <PickerAtom 
                variant='secondary' 
                placeholder='Meio de pagamento'
                options={[
                  {label: 'PIX', value: 'pix', icon: 'pix'},
                  {label: 'Boleto', value: 'bankslit', icon: 'bank-slit'},
                  {label: 'Cartão de crédito', value: 'credit-card', icon: 'credit-card'},
                ]}
              />
            </div>
            <div className="flex w-64 gap-2">
              <PickerAtom 
                variant='secondary'
                placeholder='Status'
                options={[
                  {label: 'Aprovado', value: 'approved', icon: 'approved'},
                  {label: 'Recusado', value: 'recused', icon: 'recused'},
                  {label: 'Pendente', value: 'pending', icon: 'pending'},
                ]}
              />
            </div>

              
          </div>
          <TableMolecule
            itemsPerPage={5}
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
            {
              key: 'actions',
              label: 'Ações',
            }
            ]}
            data={[{
              name: 'Fulano de Tal',
              email: 'WZqZ6@example.com',
              cpf: '123.456.789-00',
              phone: '(11) 99999-9999',
              city: 'São Paulo',
              actions: 'Editar | Excluir'
            },
            {
              name: 'Ciclano da Silva',
              email: 'WZqZ6@example.com',
              cpf: '123.456.789-00',
              phone: '(11) 99999-9999',
              city: 'São Paulo',
              actions: 'Editar | Excluir'
            },
            {
              name: 'Ciclano da Silva',
              email: 'WZqZ6@example.com',
              cpf: '123.456.789-00',
              phone: '(11) 99999-9999',
              city: 'São Paulo',
              actions: 'Editar | Excluir'
            },
            {
              name: 'Ciclano da Silva',
              email: 'WZqZ6@example.com',
              cpf: '123.456.789-00',
              phone: '(11) 99999-9999',
              city: 'São Paulo',
              actions: 'Editar | Excluir'
            },
          ]}
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
              if (key === 'actions') {
                return (
                  <div className="flex gap-2 my-1">
                    <ButtonAtom variant='tertiary' title='Remover'>
                      <TrashIcon className="w-4 h-4 text-gray-200"/>
                    </ButtonAtom>
                  </div>
                )
              }
              return item[key]
            }}
          />

          <ChartAtom
            type="line"
            data={[
              { name: "Vendas", value: 300 },
              { name: "Marketing", value: 500 },
              { name: "Suporte", value: 200 },
            ]}
            series={[{ key: "value", name: "Setores" }]}
          />
          <ChartAtom
            type="line"
            nameKey="mes" // eixo X
            data={[
              { mes: "Jan", matriculas: 20 },
              { mes: "Fev", matriculas: 35 },
              { mes: "Mar", matriculas: 28 },
              { mes: "Abr", matriculas: 40 },
              { mes: "Mai", matriculas: 33 },
              { mes: "Jun", matriculas: 35 },
              { mes: "Jul", matriculas: 37 },
              { mes: "Ago", matriculas: 45 },
            ]}
            series={[{ key: "matriculas", name: "Matrículas" }]}
          />


        </div>
      </div> 
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
