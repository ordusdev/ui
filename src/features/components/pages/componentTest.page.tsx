import React, { useEffect } from "react"
import { TabNavigationMolecule } from "../tabNavigation.molecule"
import { SidebarAtom } from "../sidebar.atom"
import { TableMolecule } from "@ordus/ui";
import { IconConfig } from "../../../../lib/config/icons.config";

const modules: any = [
  { key: 'home', icon: 'home', label: "Início", path: "/component-test", },
  { key: 'user', icon: 'user', label: "Usuários", path: "/component-test" },
  { key: 'catechists', icon: 'people', label: "Catequistas", path: "/component-test" },
  { key: 'catechesis', icon: 'fish', label: "Catequese", path: "/component-test" },
  { key: 'formation', icon: 'graduation', label: "Formação", path: "/component-test" },
];

export const ComponentTestPage = () => {
  const [activeTab, setActiveTab] = React.useState('config')
  const [currentModule, setCurrentModule] = React.useState('home')
  const Icon = IconConfig.getIconByName(modules.find((tab) => tab.key === currentModule)?.icon ?? 'home')

  useEffect(() => {
    console.log(activeTab)
    const currentPath = window.location.pathname;
    const currTab = modules.find(tab => tab.path === currentPath)?.key || 'home';
    setCurrentModule(currTab);
  }, [])

  return (
    <div className="flex">
      <SidebarAtom tabs={modules} brandIcon={{collapsed: <img src="https://s3.tebi.io/files.adiel.dev/Logotipo%20Sao%20Benedito%201.png"/>, expanded: <img src="https://s3.tebi.io/files.adiel.dev/logos-sao-benedito-horizontal.png"/>}} onTabChange={(tab) => setCurrentModule(tab)}/>
      {/* <SidebarAtom tabs={modules} brandIcon={{collapsed: <img src="https://jovemmotorista.com.br/_next/static/media/logoDrawer.d30b2c8c.svg"/>, expanded: <img src="https://jovemmotorista.com.br/_next/static/media/logoDrawerExpanded.17cabf4a.svg"/>}} onTabChange={(tab) => setCurrentModule(tab)}/> */}
      <div className="flex flex-1 flex-col pl-4">
        <div className="flex pl-2 py-4 gap-2 items-center">
          <Icon className="w-8 h-8 text-foreground-primary"/>
          <h1 className="text-3xl text-foreground-primary font-semibold flex gap-2 items-center" >{modules.find((tab) => tab.key === currentModule)?.label}</h1>
        </div>
        <TabNavigationMolecule 
          variant="top"
          activeTab={activeTab} 
          className=""
          tabs={[
            {label: 'Inscrições', key: 'enrollments', value: <></>, icon: 'enrollment'},
            {label: 'Turmas', key: 'classrooms', value: <></>, icon: 'classroom'},
            {label: 'Catequisandos', key: 'catechisings', value: <></>, icon: 'user'},
            {label: 'Catequistas', key: 'catechists', value: <></>, icon: 'backoffice'},
            {label: 'Preferências', key: 'config', value: <TableMolecule columns={[{key: 'name', label: 'Name'}, {key: 'description', label: 'Description'}, {key: 'icon', label: 'Icon'}, {key: 'color', label: 'Color'}, {key: 'background', label: 'Background'}]} data={[{name: 'name', description: 'description um pouco maior', icon: 'icon', color: 'color', background: 'background'}]} />, icon: 'config'},
          ]} 
          onTabChange={setActiveTab}/>
      </div>
    </div>
  )
}