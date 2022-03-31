import './assets/css/blog.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Error } from '@/pages/error/Error';
import { About } from '@/pages/about/About';
import { Index } from '@/pages';
import { PostsPage } from '@/pages/posts/PostsPage';
import { PostDetail } from './pages/posts/PostDetail';
import { BlogContext } from '@/libs/context/BlogContext';

ReactDOM.render(
  <React.StrictMode>
    <BlogContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
