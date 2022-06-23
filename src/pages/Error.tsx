import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Error: FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <h1>{pathname} 페이지는 존재하지 않습니다.</h1>
    </Container>
  );
};
