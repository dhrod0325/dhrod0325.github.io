import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType } from "@/@types";
import { Col, Container, Row } from "react-bootstrap";

import style from "@/assets/css/style.module.scss";
import "github-markdown-css/github-markdown.css";
import { Comment } from "@/components/Comment";
import { postsAtom } from "@/@atom";
import { getPostByPath } from "@/@functions";

import "highlight.js/styles/default.css";

export const PostDetail = () => {
  const [post, setPost] = useState<PostType>();
  const [posts] = useAtom(postsAtom);
  const { path } = useParams<{ path: string }>();

  useEffect(() => {
    const post = getPostByPath(posts, path);

    console.log(post);

    setPost(post);
  }, [posts]);

  return (
    <Container fluid>
      <h2 className={style.postTitle}>{post?.metaData.title}</h2>

      <Row>
        <Col lg={8}>
          <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: `${post?.html}` }}
          />
        </Col>
        <Col lg={4}>
          <div
            className="markdown-toc"
            dangerouslySetInnerHTML={{ __html: `${post?.tocHtml}` }}
          />
        </Col>
      </Row>

      <Comment issueTerm={post?.metaData.title} />
    </Container>
  );
};
