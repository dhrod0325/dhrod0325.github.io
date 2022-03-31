import { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { PostType } from 'blog';
import { PostsWrapper } from '@/libs/PostsWrapper';

export const PostDetail: FC = () => {
  const posts = new PostsWrapper();
  const { id } = useParams();

  const post: PostType = posts.getPostByFileName(id as string);
  const { title, html } = post;

  const commentDiv = useRef(null);

  useEffect(() => {
    console.log(commentDiv);

    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('repo', 'dhrod0325/dhrod0325.github.io');
    script.setAttribute('theme', 'github-light');
    script.crossOrigin = 'anonymous';
  });

  return (
    <main className="container">
      <h1>{title}</h1>
      <hr />
      {parser(html)}

      <div className="comment"></div>
    </main>
  );
};
