import { FC, useContext } from 'react';
import { Posts } from '@/components/Posts';
import { BlogContextStore } from '@/libs/context/BlogContext';

export const PostsPage: FC = () => {
  const { posts } = useContext(BlogContextStore);

  return (
    <main className="container">
      <h2>Posts</h2>
      <Posts posts={posts} />
    </main>
  );
};
