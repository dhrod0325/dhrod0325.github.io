import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './index';
import { Sidebar } from '@/components/layout/Sidebar';

export const Layout: FC = () => {
  return (
    <main>
      <Sidebar />

      <Header />

      <Outlet />

      <Footer />
    </main>
  );
};
