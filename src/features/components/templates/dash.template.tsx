import React from 'react'
import { SidebarAtom } from '../atoms/sidebar.atom';

type DashTemplate = {
  children: React.ReactNode;
};

export const DashTemplate: React.FC<DashTemplate> = ({ children }) => {
  return (
    <main className='flex bg-background-primary w-full h-full min-h-screen px-4 pl-24 py-4'>
      <SidebarAtom/>
      {children}
    </main>
  )
};
