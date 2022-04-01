import React, { FC } from 'react';
import { BlogContext } from '@/libs/context/BlogContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/layout';
import { Index } from '@/pages';
import { About } from '@/pages/about/About';
import { PostsPage } from '@/pages/posts/PostsPage';
import { PostDetail } from '@/pages/posts/PostDetail';
import { Error } from '@/pages/error/Error';

export const App: FC = () => {
  return (
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
    </React.StrictMode>
  );
};
