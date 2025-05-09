import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ButtonAtom } from './features/components/atoms/button.atom'
import { InputAtom } from './features/components/atoms/input.atom'
import { SearchInputAtom } from './features/components/atoms/searchInput.atom'
import { useTheme } from './shared/hooks/useTheme.hook'
import { PickerAtom } from './features/components/atoms/picker.atom'


const App = () => {
  useTheme()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-primary flex-col">

      <div className="flex gap-2">
        
        <div className="flex w-80">
          <SearchInputAtom variant='secondary'/>
        </div>
        
        <div className="flex w-80 gap-2">
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
        <div className="flex w-80 gap-2">
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
      {/* <InputAtom variant='secondary'/>
      
      <ButtonAtom variant='primary' >Olá</ButtonAtom> */}
      <div className="flex bg-background-primary mt-2 shadow shadow-brand flex-col gap-2 w-80 p-4 rounded-xl">

        <InputAtom variant='secondary' label='Usuário' placeholder='@nome.usuario'/>
        <InputAtom variant='secondary' label='Nome' placeholder='Fulano'/>
        
        <ButtonAtom variant='primary'>Enviar</ButtonAtom>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
