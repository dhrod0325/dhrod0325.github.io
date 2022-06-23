import { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PostType } from "@/@types";
import { postsAtom } from "@/@atom";
import { useAtom } from "jotai";

import style from "@/assets/css/style.module.scss";

export const PostList: FC = () => {
  const [posts] = useAtom(postsAtom);
  const navigate = useNavigate();

  const handleRead = (e: MouseEvent, path: string) => {
    e.preventDefault();

    navigate(`/post/${path}`);
  };

  return (
    <Container fluid={true}>
      <Row>
        {posts.map(
          ({ metaData: { title, thumb, summary }, path }: PostType, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card>
                <Card.Img variant={"top"} src={thumb} />
                <Card.Body>
                  <Card.Title className={style.cardTitle}>{title}</Card.Title>
                  <Card.Text>{summary}</Card.Text>

                  <Button
                    variant="primary"
                    onClick={(e) => handleRead(e as any, path)}
                  >
                    READ
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};
