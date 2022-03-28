import style from '@/assets/css/App.module.scss';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';

import { Gnb } from '@/components';
import { Footer, Header } from './index';

export const Layout: FC = () => {
  return (
    <main className={classNames(style.Main)}>
      <Header />
      <Gnb />
      <Outlet />
      <Footer />
    </main>
  );
};
