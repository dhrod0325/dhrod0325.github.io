import { FC } from 'react';
import { Container } from 'react-bootstrap';

export const Footer: FC = () => {
  return (
    <footer className="blog-footer">
      <Container>
        <p>&copy; copyright 2022</p>
      </Container>
    </footer>
  );
};
