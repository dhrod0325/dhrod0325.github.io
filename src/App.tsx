import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Index } from '@/pages';
import { Error } from '@/pages/error/Error';

import '@/assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App: FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
