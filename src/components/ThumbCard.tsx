import { FC } from 'react';
import { PostType } from 'blog';

type ThumbCardProps = {
  post: PostType;
};

export const ThumbCard: FC<ThumbCardProps> = ({ post }) => {
  const { title, category, date, summary, thumb } = post;

  return (
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{category}</strong>
          <h3 className="mb-0">{title}</h3>
          <div className="mb-1 text-muted">{date.toLocaleString()}</div>
          <p className="card-text mb-auto">{summary}</p>
          <a href="#" className="stretched-link">
            Continue reading
          </a>
        </div>

        <div className="col-auto d-none d-lg-block">
          <img src={thumb} alt="" style={{ height: `100%` }} />
        </div>
      </div>
    </div>
  );
};
