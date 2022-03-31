import contents from '@/assets/json/posts.json';

import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Posts: FC = () => {
  return (
    <main className="container">
      <h2>Posts</h2>

      <ul>
        {Object.values(contents).map(content => (
          <li key={content.fileName}>
            <div className="title">
              <NavLink to={`/post/${content.fileName}`}>{content.fileName}</NavLink>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
