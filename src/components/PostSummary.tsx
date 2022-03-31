import { FC } from 'react';
import { PostType } from 'blog';
import { NavLink } from 'react-router-dom';

type PostProps = {
  post: PostType;
};

export const PostSummary: FC<PostProps> = props => {
  const { title, date, summary, fileName } = props.post;
  return (
    <article className="blog-post">
      <NavLink to={`/post/${fileName}`}>
        <h2 className="blog-post-title">{title}</h2>
        <p className="blog-post-meta">{date.toLocaleString()}</p>
        <p>{summary}</p>
      </NavLink>
      <hr />
    </article>
  );
};
