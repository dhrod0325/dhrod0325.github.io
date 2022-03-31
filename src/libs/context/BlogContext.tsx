import { createContext, FC } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';

type BlogContextType = {
  posts: PostsWrapper;
};

export const BlogContextStore = createContext({} as BlogContextType);

export const BlogContext: FC = props => {
  const posts = new PostsWrapper();

  const blog: BlogContextType = {
    posts,
  };

  return <BlogContextStore.Provider value={blog}>{props.children}</BlogContextStore.Provider>;
};
