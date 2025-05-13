import React from "react";

type Tab = {
  label: string;
  key: string;
  value: React.ReactNode;
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
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`px-4 py-2 transition-colors border-b-2 ${
                isActive
                  ? "border-brand text-brand font-medium"
                  : "border-transparent text-foreground-secondary hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.find((tab) => tab.key === activeTab)?.value}
    </div>
  );
};
