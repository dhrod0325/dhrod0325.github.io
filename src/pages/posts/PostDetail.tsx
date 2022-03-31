import { FC } from 'react';
import contents from '@/assets/json/posts.json';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { Post, Posts } from 'blog';
import { PostsWrapper } from '@/libs/PostsWrapper';

export const PostDetail: FC = () => {
  const posts = new PostsWrapper();
  const { id } = useParams();
  const content: Post = posts.getPostByFileName(id as string);

  console.log(content, contents, id);

  return <main className="container">{parser(content.html)}</main>;
};
