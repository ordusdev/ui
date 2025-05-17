import React, { useEffect } from "react"
import { TabNavigationMolecule } from "../tabNavigation.molecule"
import { SidebarAtom } from "../sidebar.atom"
import { TableMolecule } from "@ordus/ui";
import { IconConfig } from "../../../../lib/config/icons.config";
import { useSectionStore } from "../../../shared/store/useSection.store";

const modules: any = [
  { key: 'home', icon: 'home', label: "Início", path: "/component-test", },
  { key: 'user', icon: 'user', label: "Usuários", path: "/component-test" },
  { key: 'catechists', icon: 'people', label: "Catequistas", path: "/component-test" },
  { key: 'catechesis', icon: 'fish', label: "Catequese", path: "/component-test" },
  { key: 'sacraments', icon: 'sacraments', label: "Sacramentos", path: "/component-test" },
  { key: 'formation', icon: 'graduation', label: "Formação", path: "/component-test" },
];

export const ComponentTestPage = () => {
  const [activeTab, setActiveTab] = React.useState('config')
  const [currentModule, setCurrentModule] = React.useState('home')
  const Icon = IconConfig.getIconByName(modules.find((tab) => tab.key === currentModule)?.icon ?? 'home')
  const { 
    catechesisTabs,
    catechistsTabs,
    sacramentsTabs,
    formationTabs,
    homeTabs,
    usersTabs,
  } = useSectionStore()

  const tabs = {
    home: homeTabs,
    user: usersTabs,
    catechists: catechistsTabs,
    catechesis: catechesisTabs,
    sacraments: sacramentsTabs,
    formation: formationTabs,
  }
  

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
      <div className="flex flex-1 flex-col md:pl-2 overflow-x-scroll">
        <div className="flex pl-2 py-4 gap-2 items-center">
          <Icon className="w-8 h-8 text-foreground-primary"/>
          <h1 className="text-3xl text-foreground-primary font-semibold flex gap-2 items-center" >{modules.find((tab) => tab.key === currentModule)?.label}</h1>
        </div>
        <TabNavigationMolecule 
          variant="top"
          activeTab={activeTab} 
          className=""
          tabs={tabs[currentModule]} 
          onTabChange={setActiveTab}/>
      </div>
    </div>
  )
}