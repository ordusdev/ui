import React, { useEffect, useRef } from "react";
import { Icons, IconConfig } from "../../../lib/config/icons.config";

type Tab = {
  label: string;
  key: string;
  value: React.ReactNode;
  icon: Icons;
};

type TabNavigationMolecule = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  className?: string;
  variant?: 'top' | 'bottom';
};

export const TabNavigationMolecule: React.FC<TabNavigationMolecule> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'top',
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Scroll to active tab on tab change
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton) {
      activeButton.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [activeTab]);

  const variantStyles = {
    bottom: "flex-col-reverse",
    top: "flex-col",
  }

  return (
    <div className={`text-foreground-primary flex flex-col gap-2 overflow-hidden relative ${variant === 'bottom' && 'min-h-screen'} ${variantStyles[variant]} ${className}`}>
      
      {/* Tab list */}
      <div
        ref={containerRef}
        className={`flex ${variant === 'bottom' ? 'border-t' : 'border-b'} border-border border-foreground-tertiary/80 overflow-x-auto scroll-smooth no-scrollbar `}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          const Icon = IconConfig.getIconByName(tab.icon);
          return (
            <button
              key={tab.key}
              ref={(el) => {
                tabRefs.current[tab.key] = el;
              }}
              onClick={() => onTabChange(tab.key)}
              className={`px-4 py-2 transition-colors flex items-center gap-1 whitespace-nowrap ${variant === 'bottom' ? 'border-t-2' : 'border-b-2'} ${
                isActive
                  ? "border-brand text-brand bg-brand/10 font-medium"
                  : `border-foreground-tertiary/10 text-foreground-secondary hover:text-foreground`
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />} {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active tab content */}
      <div className="flex-1 p-2">
        {tabs.find((tab) => tab.key === activeTab)?.value}
      </div>
    </div>
  );
};
