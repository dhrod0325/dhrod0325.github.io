import { FC } from 'react';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { PostType } from 'blog';
import { PostsWrapper } from '@/libs/PostsWrapper';

export const PostDetail: FC = () => {
  const posts = new PostsWrapper();
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
