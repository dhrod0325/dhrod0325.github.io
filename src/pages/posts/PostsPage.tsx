import { FC } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';
import { Posts } from '@/components/Posts';

export const PostsPage: FC = () => {
  const posts = new PostsWrapper();

  return (
    <main className="container">
      <h2>Posts</h2>
      <Posts posts={posts} />
    </main>
  );
};
