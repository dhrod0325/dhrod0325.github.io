import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Gnb: FC = () => {
  return (
    <div className="container">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav">
          <NavLink className="p-2 link-secondary" to={`/about`}>
            About me
          </NavLink>
          <NavLink className="p-2 link-secondary" to={`/posts`}>
            Posts
          </NavLink>
        </nav>
      </div>
    </div>
  );
};
