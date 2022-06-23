import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Header: FC = () => {
  return (
    <header className="py-3 hide">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <a className="blog-header-logo" href="/">
              dhrod0325.github.io
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
