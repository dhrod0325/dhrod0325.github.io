import { useAtom } from "jotai";
import { postAtom } from "@/store/postAtom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType } from "@/@types";
import { Container } from "react-bootstrap";

import "github-markdown-css/github-markdown.css";

export const PostDetail = () => {
  const [post, setPost] = useState<PostType>();
  const [posts] = useAtom(postAtom);
  const { index } = useParams<{ index: string }>();

  useEffect(() => {
    setPost(posts[Number(index)]);
  }, [posts]);

  return (
    <Container fluid>
      <h2>{post?.metaData.title}</h2>

      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: `${post?.html}` }}
      />
    </Container>
  );
};
