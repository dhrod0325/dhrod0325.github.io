import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './index';
import { Gnb } from '@/components/Gnb';

export const Layout: FC = () => {
  return (
    <main>
      <Header />
      <Gnb />
      <Outlet />
      <Footer />
    </main>
  );
};
