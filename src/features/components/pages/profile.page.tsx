import React from "react"
import { DashTemplate , InputAtom , CardMolecule, PickerAtom , ButtonAtom } from "@ordus/ui"

type ProfilePage = {}

export const ProfilePage: React.FC<ProfilePage> = () => {
  const [editingPersonal, setEditingPersonal] = React.useState(false)
  const [editingAddress, setEditingAddress] = React.useState(false)
  const [editingContact, setEditingContact] = React.useState(false)

  const handleEditPersonal = () => {
    setEditingPersonal(!editingPersonal)
  }

  const handleEditAddress = () => {
    setEditingAddress(!editingAddress)
  }

  const handleEditContact = () => {
    setEditingContact(!editingContact)
  }

  return (
    <DashTemplate>
      <h1 className="font-semibold text-2xl text-foreground-primary mb-2">Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <CardMolecule title="Informações pessoais" icon="user" editing={editingPersonal} onEdit={handleEditPersonal}>
          <InputAtom label="Nome" variant="tertiary" placeholder="Digite seu nome" disabled={!editingPersonal}/>
          <InputAtom label="Data de Nascimento" variant="tertiary" placeholder="Digite seu nome" type="date" disabled />
          <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
            <InputAtom label="CPF" variant="tertiary" placeholder="000.000.000-00" className="w-full" disabled />
            <InputAtom label="RG" variant="tertiary" placeholder="00.000.000" className="w-full" disabled/>
          </div>
        </CardMolecule>

        <CardMolecule title="Endereço" icon="address" editing={editingAddress} onEdit={handleEditAddress}>
          <div className="flex gap-2 w-full">
            <InputAtom label="Rua" variant="tertiary" placeholder="Digite seu endereço" disabled={!editingAddress} />
          </div>
          <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
            <InputAtom label="Número" variant="tertiary" placeholder="Número da residência" type="number" className="w-full" disabled={!editingAddress}/>
            <InputAtom label="Bairro" variant="tertiary" placeholder="Digite seu bairro" className="w-full" disabled={!editingAddress}/>
          </div>
          <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
            <PickerAtom options={[
              {label: 'Acre', value: 'AC', icon: 'map-marker'},
              {label: 'Minas Gerais', value: 'MG', icon: 'map-marker'},
            ]} label="Estado" placeholder="Selecione um estado" variant="tertiary" icon="locate" className="w-full" disabled={!editingAddress}/>
            <PickerAtom options={[
              {label: 'Araguari', value: 'araguari', icon: 'city'},
              {label: 'Uberlândia', value: 'uberlandia', icon: 'city'},
            ]} label="Cidade" placeholder="Selecione uma cidade" variant="tertiary" icon="city" className="w-full" disabled={!editingAddress}/>
          </div>
        </CardMolecule>
        
        <CardMolecule title="Informações de contato" icon="contact" editing={editingContact} onEdit={handleEditContact}>
          <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
            <InputAtom label="Email" variant="tertiary" placeholder="Digite seu e-mail" type="email" className="w-full" disabled={!editingContact}/>
            <InputAtom label="Telefone" variant="tertiary" placeholder="Digite seu telefone" type="tel" className="w-full" disabled={!editingContact}/>
          </div>
        </CardMolecule>

        <CardMolecule title="Configurações" icon="user-config" >
          <></>
          <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
            <InputAtom label="Usuário" variant="tertiary" placeholder="Digite seu usuário" disabled value='@admin' />
            {/* <InputAtom label="Telefone" variant="tertiary" placeholder="Digite seu telefone"/> */}
          </div>
        </CardMolecule>

        <CardMolecule title="Autenticar" icon="user" className="max-w-96">
          <></>
            <InputAtom label="Usuário" variant="tertiary" placeholder="Digite seu usuário" />
            <InputAtom label="Senha" variant="tertiary" placeholder="Digite sua senha" type="password" />
          <div className="flex gap-2 w-full flex-wrap sm:flex-nowrap">
          </div>
          <ButtonAtom variant="primary" className="w-full">Autenticar</ButtonAtom>
        </CardMolecule>
      </div>
    </DashTemplate>
  )
}