import {FC} from 'react';

export const Footer: FC = () => {
  return (
    <footer className="blog-footer">
      <div className="container">
        <p>
          Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by{' '}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </div>
    </footer>
  );
};
