import { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PostType } from "@/@types";
import { useAtom } from "jotai";
import { postAtom } from "@/store/postAtom";

export const PostList: FC = () => {
  const [posts] = useAtom(postAtom);
  const navigate = useNavigate();

  const handleRead = (e: MouseEvent, index: number) => {
    e.preventDefault();

    navigate(`/post/${index}`);
  };

  return (
    <Container fluid={true}>
      <Row>
        {posts.map(
          ({ metaData: { title, thumb, summary } }: PostType, index) => (
            <Col md={3} key={index}>
              <Card>
                <Card.Img variant={"top"} src={thumb} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{summary}</Card.Text>

                  <Button
                    variant="primary"
                    onClick={(e) => handleRead(e as any, index)}
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
