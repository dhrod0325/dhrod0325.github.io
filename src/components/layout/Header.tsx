import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="blog-header py-3">
      <div className="container">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-12 text-center">
            <a className="blog-header-logo" href="/">
              dhrod0325.github.io
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
