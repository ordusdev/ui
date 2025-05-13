import React from "react"
import { TabNavigationMolecule } from "../molecules/tabNavigation.molecule"
import IconConfig, { Icons } from "../../../config/icons.config"

type TabOrganism = {
  title: {
    value: string,
    icon: Icons
  },
  tabs: {
    label: string,
    key: string,
    value: React.ReactNode
  }[],
  activeTab: string,
  onTabChange: (tab: string) => void
}

export const TabOrganism:  React.FC<TabOrganism> = ({
  title,
  ...props
}) => {
  const Icon = IconConfig.getIconByName(title.icon || 'tabs')
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="text-3xl text-foreground-primary flex gap-2 items-center" >{<Icon className="w-8 h-8"/> }{title.value ?? 'Tab Organism'}</h1>
      <TabNavigationMolecule {...props}/>
    </div>
  )
}