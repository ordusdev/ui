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
    <aside className="group fixed w-full bottom-0 md:top-0 left-0 md:h-full bg-brand text-foreground-primary flex md:flex-col transition-all md:rounded-r-3xl rounded-t-3xl md:rounded-l-none duration-300 z-20 md:w-16 hover:md:w-48">
      <div className="flex md:flex-col h-full w-full py-4 gap-2 px-2 justify-around md:justify-start">
        {modules.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex flex-col md:flex-row md:items-center items-center justify-start gap-1 md:gap-3 p-2 rounded hover:bg-brand/80 transition-colors w-full"
          >
            <div className="min-w-[8px]">{item.icon}</div>

            {/* Texto sempre visível no mobile, animado no desktop */}
            <span
              className="text-xs md:text-sm text-center md:text-left whitespace-nowrap 
                         transition-all duration-300
                         md:opacity-0 md:group-hover:opacity-100 
                         md:ml-[-100%] md:group-hover:ml-0
                         overflow-hidden"
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}
