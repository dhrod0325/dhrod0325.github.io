import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';

type BlogContextType = {
  posts: PostsWrapper;
  setPosts: Dispatch<SetStateAction<PostsWrapper>>;
};

export const BlogContextStore = createContext({} as BlogContextType);

export const BlogContext: FC = props => {
  const [posts, setPosts] = useState(new PostsWrapper());

  const blog: BlogContextType = {
    posts,
    setPosts,
  };

  return <BlogContextStore.Provider value={blog}>{props.children}</BlogContextStore.Provider>;
};
