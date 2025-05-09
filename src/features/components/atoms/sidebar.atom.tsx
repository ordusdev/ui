import React from "react";
import { Home, User, Settings } from "lucide-react";

type SidebarItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
};

const modules: SidebarItem[] = [
  { icon: <Home />, label: "Início", path: "/" },
  { icon: <User />, label: "Usuários", path: "/users" },
  { icon: <Settings />, label: "Configurações", path: "/settings" },
];

export function SidebarAtom() {
  return (
    <aside className="group fixed top-0 left-0 h-full bg-brand-dark text-white flex flex-col transition-all rounded-r-3xl duration-300 z-20 w-16 hover:w-48">
      <div className="flex flex-col h-full py-4 gap-2 px-2">
        {modules.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 p-2 rounded hover:bg-brand-light transition-colors"
          >
            <div className="min-w-[24px]">{item.icon}</div>
            <span className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 group-hover:opacity-100 opacity-0 group-hover:ml-0 ml-[-100%]">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
