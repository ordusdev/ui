import React, { useEffect } from "react";
import { IconConfig, Icons } from "../../../lib/config/icons.config";
import { Link } from "react-router-dom";

type SidebarItem = {
  icon: Icons;
  label: string;
  path: string;
  key: string;
};


type SidebarAtom = {
  tabs: SidebarItem[],
  brandIcon?: {
    collapsed: React.ReactNode,
    expanded: React.ReactNode
  },
  onTabChange?: (tab: string) => void
}

export const SidebarAtom: React.FC<SidebarAtom> = ({
  tabs,
  brandIcon,
  onTabChange
}) => {
  const [activeTab, setActiveTab] = React.useState('home')
  const LogoutIcon = IconConfig.getIconByName('logout');
  const itemRefs = React.useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeTab = tabs.find(tab => tab.path === currentPath)?.key || 'home';
    setActiveTab(activeTab);
  }, [])

  useEffect(() => {
    if (onTabChange) {
      onTabChange(activeTab);
    }
  }, [activeTab]);

  return (
    <aside className="group fixed bottom-0 left-0 md:relative h-16 w-full overflow-x-scroll md:overflow-x-auto md:h-screen bg-background-secondary border-t-2 md:border-r-2 border-background-tertiary/15 text-foreground-primary flex flex-col md:items-center transition-all rounded-t-3xl md:rounded-r-3xl md:rounded-l-none duration-700 z-20 md:w-16 md:hover:w-48 px-1">
      <div className="flex md:flex-col items-center h-full w-full pt-2 md:py-4 gap-1 -mr-2 justify-start">
        {brandIcon && (
          <Link
            to="/"
            className="flex flex-row items-center justify-center gap-2 p-2 font-bold rounded-full w-fit md:w-full h-fit"
          >
            <div className="md:group-hover:hidden min-w-[8px] max-w-8 md:max-w-full">
              {brandIcon.collapsed}
            </div>

            <div className="hidden md:group-hover:flex min-w-[8px md:max-w-full]">
              {brandIcon.expanded}
            </div>
          </Link>
        )}

        <div className="flex-1 md:overflow-y-scroll md:pl-0 overflow-x-scroll md:overflow-x-auto no-scrollbar"  style={{ direction: 'rtl' }}>
          <div className="flex flex-row md:flex-col gap-1.5 md:gap-1 overflow-x-scroll  w-full"  style={{ direction: 'ltr' }}>
          {tabs.map(item => {
            const isActive = item.key === activeTab;
            const Icon = IconConfig.getIconByName(item.icon);

            return (
              <Link
                key={item.path}
                to={item.path}
                ref={(el) => (itemRefs.current[item.icon] = el)}
                onClick={() => {
                  setActiveTab(item.key);
                  itemRefs.current[item.icon]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`flex flex-1 flex-row h-fit items-center justify-center md:hover:justify-center gap-2 p-2 mt-1 font-bold rounded-full md:hover:bg-brand/15 transition-colors w-full ${isActive ? 'bg-brand/20' : ''}`}
              >
                <div className="min-w-[8px]">
                  <Icon className={`h-6 md:h-6 ${isActive ? 'text-brand' : 'text-foreground-primary'}`} />
                </div>

                <span
                  className={`hidden md:group-hover:flex flex-1 text-xs text-left whitespace-nowrap transition-all duration-700 opacity-0 group-hover:opacity-100 ml-[-100%] group-hover:ml-0 overflow-hidden ${isActive ? 'text-brand' : ''}`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          </div>
        </div>

        {brandIcon && (
          <Link
            to="/"
            className="flex flex-row items-center w-fit h-fit justify-center gap-2 p-2 font-bold rounded-full md:w-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
          >
            <div className="min-w-[8px] text-red-500">
              <LogoutIcon className="w-6 h-6 text-red-500" />
            </div>

            <span
              className="hidden md:group-hover:flex flex-1 text-xs text-left whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 ml-[-100%] group-hover:ml-0 overflow-hidden text-red-500"
            >
              Desconectar
            </span>
          </Link>
        )}
      </div>
    </aside>
  );
}
