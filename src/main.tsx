import './assets/css/blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Error } from '@/pages/error/Error';
import { About } from '@/pages/about/About';
import { Index } from '@/pages';
import { Posts } from '@/pages/posts/Posts';
import { PostDetail } from './pages/posts/PostDetail';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
