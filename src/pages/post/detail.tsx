import { useAtom } from "jotai";
import { postAtom } from "@/@atom/postAtom";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType } from "@/@types";
import { Container } from "react-bootstrap";

import style from "@/assets/css/style.module.scss";
import "github-markdown-css/github-markdown.css";

export const PostDetail = () => {
  const [post, setPost] = useState<PostType>();
  const [posts] = useAtom(postAtom);
  const { index } = useParams<{ index: string }>();
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const post = posts[Number(index)];
    setPost(post);

    if (post) {
      const commentScript = document.createElement("script");
      const config = {
        src: "https://utteranc.es/client.js",
        repo: "dhrod0325/dhrod0325.github.io.comment",
        theme: "github-light",
        crossOrigin: "anonymous",
        "issue-term": `${post.metaData.title}`,
        async: true,
      };

      Object.entries(config).forEach(([key, value]) => {
        console.log(value);
        commentScript.setAttribute(`${key}`, `${value}`);
      });

      commentsRef.current?.append(commentScript);
    }
  }, [posts]);

  return (
    <Container fluid>
      <h2 className={style.postTitle}>{post?.metaData.title}</h2>

      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: `${post?.html}` }}
      />

      <div className="comments" ref={commentsRef} />
    </Container>
  );
};
