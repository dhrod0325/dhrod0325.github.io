import { FC } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';
import { PostSummary } from '@/components/PostSummary';

type PostsProps = {
  posts: PostsWrapper;
};

export const Posts: FC<PostsProps> = props => {
  const { posts } = props;

  return (
    <>
      {posts.getPosts().map(post => (
        <PostSummary key={post.fileName} post={post} />
      ))}
    </>
  );
};
