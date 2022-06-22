import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const Index: FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const t = await fetch("/posts/posts.json");
      setPosts(await t.json());
    })();
  });

  return (
    <Container>
      {posts.map((post: any, index) => post.metaData.title)}
    </Container>
  );
};
