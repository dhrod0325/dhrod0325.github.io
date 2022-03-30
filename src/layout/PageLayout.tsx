import {FC} from 'react';
import {Outlet} from 'react-router-dom';

import {Gnb} from '@/components';
import {Footer, Header} from './index';

export const PageLayout: FC = () => {
  return (
    <main >
      <Header />
      <Gnb />
      <Outlet />
      <Footer />
    </main>
  );
};
