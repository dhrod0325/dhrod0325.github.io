import { FC } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';
import { Contact } from '@/components/Contact';
import { Archives } from '@/components/Archives';
import { About } from '@/components/About';
import { Posts } from '@/components/Posts';

export const Index: FC = () => {
  const posts = new PostsWrapper();
  const firstPosts = posts.getFirstPostsOfCategory();

  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h2 className="display-4 fst-italic">Web Developer</h2>
        </div>
      </div>

      <div className="row mb-2">
        {firstPosts.map(({ title, category, date, summary, thumb }) => (
          <div className="col-md-6" key={date.toLocaleString()}>
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
        ))}
      </div>

      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">Posts</h3>
          <Posts posts={posts} />
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <About />

            <Archives />

            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
};
