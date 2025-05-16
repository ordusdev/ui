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
  }
}

export const SidebarAtom: React.FC<SidebarAtom> = ({
  tabs,
  brandIcon
}) => {
  const [activeTab, setActiveTab] = React.useState('home')
  const LogoutIcon = IconConfig.getIconByName('logout');
  const itemRefs = React.useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeTab = tabs.find(tab => tab.path === currentPath)?.key || 'home';
    setActiveTab(activeTab);
  }, [])

  return (
    <aside className="group fixed top-0 left-0 h-full bg-background-secondary border-r-2 border-background-tertiary/15 text-foreground-primary flex flex-col transition-all rounded-r-3xl duration-300 z-20 w-16 hover:w-48 px-1">
      <div className="flex flex-col h-full w-full py-4 gap-1 -mr-2 justify-start">
        {brandIcon && (
          <Link
            to="/"
            className="flex flex-row items-center justify-center gap-2 p-2 font-bold rounded-full w-full"
          >
            <div className="group-hover:hidden min-w-[8px]">
              {brandIcon.collapsed}
            </div>

            <div className="hidden group-hover:flex min-w-[8px]">
              {brandIcon.expanded}
            </div>
          </Link>
        )}

        <div className="flex-1 overflow-y-scroll pl-1 no-scrollbar"  style={{ direction: 'rtl' }}>
          <div className=""  style={{ direction: 'ltr' }}>
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
                className={`flex flex-row items-center justify-center hover:justify-start gap-2 p-2 mt-1 font-bold rounded-full hover:bg-brand/15 transition-colors w-full ${isActive ? 'bg-brand/20' : ''}`}
              >
                <div className="min-w-[8px]">
                  <Icon className={`w-6 h-6 ${isActive ? 'text-brand' : 'text-foreground-primary'}`} />
                </div>

                <span
                  className={`hidden group-hover:flex flex-1 text-xs text-left whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 ml-[-100%] group-hover:ml-0 overflow-hidden ${isActive ? 'text-brand' : ''}`}
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
            className="flex flex-row items-center justify-center gap-2 p-2 font-bold rounded-full w-full bg-red-500/20 hover:bg-red-500/30 transition-colors"
          >
            <div className="min-w-[8px] text-red-500">
              <LogoutIcon className="w-6 h-6 text-red-500" />
            </div>

            <span
              className="hidden group-hover:flex flex-1 text-xs text-left whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 ml-[-100%] group-hover:ml-0 overflow-hidden text-red-500"
            >
              Desconectar
            </span>
          </Link>
        )}
      </div>
    </aside>
  );
}
