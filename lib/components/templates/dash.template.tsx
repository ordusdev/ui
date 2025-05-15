import React from 'react'
import { SidebarAtom } from '../atoms/sidebar.atom';

type DashTemplate = {
  children: React.ReactNode;
};

export const DashTemplate: React.FC<DashTemplate> = ({ children }) => {
  return (
    <main className='flex bg-background-primary w-full h-full min-h-screen px-4 md:pl-24 py-4 flex-col'>
      <SidebarAtom/>
      {children}
    </main>
  )
};
