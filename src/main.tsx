import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ButtonAtom } from './features/components/atoms/button.atom'
import { InputAtom } from './features/components/atoms/input.atom'
import { SearchInputAtom } from './features/components/atoms/searchInput.atom'
import { useTheme } from './shared/hooks/useTheme.hook'
import { PickerAtom } from './features/components/atoms/picker.atom'
import { TableAtom } from './features/components/atoms/table.atom'

import IconConfig from './config/icons.config'


const App = () => {
  useTheme()

  const TrashIcon = IconConfig.getIconByName('trash')
  const MailIcon = IconConfig.getIconByName('mail')
  const PhoneIcon = IconConfig.getIconByName('phone')

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-primary flex-col">
      
      
      <div className="w-full max-w-[1280px] flex flex-col gap-2">
        <div className="flex gap-2">
          
          <div className="flex w-80">
            <SearchInputAtom variant='secondary'/>
          </div>
          
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
        <TableAtom
          itemsPerPage={3}
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
                <a className='flex gap-2 text-brand-dark' href={`mailto:${item[key]}`}>
                  <MailIcon className="w-5 h-5 text-brand-gray"/>
                  {item[key]}
                </a>
              )
            }
            if(key === 'phone') {
              return (
                <a className='flex gap-2 text-brand-dark' href={`tel:${item[key]}`}>
                  <PhoneIcon className="w-5 h-5 text-brand-gray"/>
                  {item[key]}
                </a>
              )
            }
            if (key === 'actions') {
              return (
                <div className="flex gap-2">
                  <ButtonAtom variant='primary' title='Remover'>
                    <TrashIcon className="w-5 h-5 text-gray-200"/>
                  </ButtonAtom>
                </div>
              )
            }
            return item[key]
          }}
        />
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
