import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAtom } from "jotai";

import { Layout } from "@/components/layout";
import { Index } from "@/pages";
import { Error } from "@/pages/Error";
import { PostDetail } from "@/pages/post/detail";
import { PostList } from "@/pages/post/list";

import { getPosts } from "@/@functions";

import "@/assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { postsAtom } from "@/@atom";

export const App: FC = () => {
  const [, setPosts] = useAtom(postsAtom);

  useEffect(() => {
    (async () => {
      setPosts(await getPosts());
    })();
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:index" element={<PostDetail />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
