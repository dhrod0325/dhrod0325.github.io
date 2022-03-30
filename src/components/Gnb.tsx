import {FC} from 'react';

export const Gnb: FC = () => {
  return (
    <div className="container">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav">
          <a className="p-2 link-secondary" href="#">
            About me
          </a>
          <a className="p-2 link-secondary" href="#">
            Posts
          </a>
        </nav>
      </div>
    </div>
  );
};
