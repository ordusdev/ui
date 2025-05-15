import React from "react";
import { Icons, IconConfig } from '../../config/icons.config';

type Tab = {
  label: string;
  key: string;
  value: React.ReactNode;
  icon: Icons
};

type TabNavigationMolecule = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  className?: string;
};

export const TabNavigationMolecule: React.FC<TabNavigationMolecule> = ({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}) => {
  return (
    <div className="text-foreground-primary flex flex-col gap-2">
      <div className={`flex border-b border-border border-foreground-tertiary  ${className}`}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          const Icon = IconConfig.getIconByName(tab.icon)
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`px-4 py-2 transition-colors border-b-2 flex items-center gap-1 ${
                isActive
                  ? "border-brand text-brand font-medium"
                  : "border-transparent text-foreground-secondary hover:text-foreground"
              }`}
            >
             {Icon && <Icon className="w-4 h-4"/>} {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.find((tab) => tab.key === activeTab)?.value}
    </div>
  );
};
