import { FC, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export type PostMetaType = {
  category: string;
  title: string;
  date: string;
  summary: string;
  thumb: string;
};

export type PostType = {
  html: string;
  markdown: string;
  metaData: PostMetaType;
};

type PostCardProps = {
  post: PostType;
};

export const PostCard = ({ post }: PostCardProps) => {
  return <>{post.metaData.title}</>;
};

export const PostList: FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const t = await fetch("/posts/posts.json");
      setPosts(await t.json());
    })();
  }, []);

  return (
    <Container>
      <Row>
        {posts.map(
          ({ metaData: { title, thumb, summary } }: PostType, index) => (
            <Col md={3}>
              <Card key={index}>
                <Card.Img variant={"top"} src={thumb} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{summary}</Card.Text>
                  <Button variant="primary">READ</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};
