import { FC } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';
import { Post } from '@/components/Post';

// type PostsProps = {
//   posts: PostsWrapper;
// } & PropsWithChildren<any>;

type PostsProps = {
  posts: PostsWrapper;
};

export const Posts: FC<PostsProps> = props => {
  const { posts } = props;

  return (
    <>
      {posts.getPosts().map(post => (
        <Post key={post.fileName} post={post} />
      ))}
    </>
  );
};
