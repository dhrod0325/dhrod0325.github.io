import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { PostType } from 'blog';
import { BlogContextStore } from '@/libs/context/BlogContext';

export const PostDetail: FC = () => {
  const { posts } = useContext(BlogContextStore);
  const { id } = useParams();

  const post: PostType = posts.getPostByFileName(id as string);
  const { title, html } = post;

  return (
    <main className="container">
      <h1>{title}</h1>
      <hr />
      {parser(html)}
    </main>
  );
};
