import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './index';

export const Layout: FC = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
