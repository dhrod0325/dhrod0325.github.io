import { FC } from "react";
import { Container } from "react-bootstrap";

export const Footer: FC = () => {
  return (
    <footer>
      <Container fluid={true}>
        <p>&copy; copyright 2022</p>
      </Container>
    </footer>
  );
};
