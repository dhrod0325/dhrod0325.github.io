import React, { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Index } from "@/pages";
import { Error } from "@/pages/error/Error";

import "@/assets/css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "@/pages/about/about";
import { useAtom } from "jotai";
import { postAtom } from "@/@atom/postAtom";
import { PostDetail } from "@/pages/post/detail";

async function getPosts() {
  const postsUrl = await fetch("/posts/posts.json");
  return await postsUrl.json();
}

export const App: FC = () => {
  const [, setPosts] = useAtom(postAtom);

  useEffect(() => {
    (async () => {
      const postResponse = await getPosts();
      setPosts(postResponse);
    })();
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/post/:index" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
