import React from "react"
import { TabNavigationMolecule } from "../tabNavigation.molecule"
import { SidebarAtom } from "../sidebar.atom"
import { TableMolecule } from "@ordus/ui";

const modules: any = [
  { key: 'home', icon: 'home', label: "Início", path: "/component-test", },
  { key: 'user', icon: 'user', label: "Usuários", path: "/component-test" },
  { key: 'settings', icon: 'settings', label: "Configurações", path: "/component-test" },
  { key: 'preferences', icon: 'config', label: "Preferências", path: "/component-test" },
  { key: 'students', icon: 'people', label: "Estudantes", path: "/component-test" },
  { key: 'leads', icon: 'lead', label: "Leads", path: "/component-test" },
  { key: 'leads-company', icon: 'lead-company', label: "Leads Empresa", path: "/component-test" },
  { key: 'companies', icon: 'company', label: "Empresas", path: "/component-test" },
  { key: 'enrollments', icon: 'enrollment', label: "Matriculas", path: "/component-test" },
  { key: 'contract', icon: 'contract', label: "Contratos", path: "/component-test" },
  { key: 'fee', icon: 'taxes', label: "Taxas", path: "/component-test" },
  { key: 'payments', icon: 'payment', label: "Pagamentos", path: "/component-test" },
  { key: 'cancellments', icon: 'cancellation', label: "Cancelamentos", path: "/component-test" },
];

export const ComponentTestPage = () => {
  const [activeTab, setActiveTab] = React.useState('config')
  return (
    <div>
      <SidebarAtom tabs={modules} brandIcon={{collapsed: <img src="https://jovemmotorista.com.br/_next/static/media/logoDrawer.d30b2c8c.svg"/>, expanded: <img src="https://jovemmotorista.com.br/_next/static/media/logoDrawerExpanded.17cabf4a.svg"/>}}/>
      <TabNavigationMolecule 
        variant="top"
        activeTab={activeTab} 
        className="pl-16"
        tabs={[
          {label: 'Perfil', key: 'profile', value: <p>Paginação</p>, icon: 'approved'},
          {label: 'Test', key: 'test', value: <p>Test</p>, icon: 'archive'},
          {label: 'Component', key: 'component', value: <p>Component</p>, icon: 'ban-user'},
          {label: 'Configurações', key: 'setting', value: <p>Setting</p>, icon: 'settings'},
          {label: 'Preferências', key: 'config', value: <TableMolecule columns={[{key: 'name', label: 'Name'}, {key: 'description', label: 'Description'}, {key: 'icon', label: 'Icon'}, {key: 'color', label: 'Color'}, {key: 'background', label: 'Background'}]} data={[{name: 'name', description: 'description um pouco maior', icon: 'icon', color: 'color', background: 'background'}]} />, icon: 'config'},
        ]} 
        onTabChange={setActiveTab}/>
    </div>
  )
}