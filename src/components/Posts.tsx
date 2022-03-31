import { FC, useContext } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';
import { PostSummary } from '@/components/PostSummary';
import { BlogContextStore } from '@/libs/context/BlogContext';

type PostsProps = {
  posts: PostsWrapper;
};

export const Posts: FC<PostsProps> = props => {
  const { posts } = useContext(BlogContextStore);

  return (
    <>
      {posts.getPosts().map(post => (
        <PostSummary key={post.fileName} post={post} />
      ))}
    </>
  );
};
