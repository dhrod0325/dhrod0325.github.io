import { FC } from 'react';
import { PostsWrapper } from '@/libs/PostsWrapper';
import { Contact } from '@/components/Contact';
import { Archives } from '@/components/Archives';
import { About } from '@/components/About';
import { Posts } from '@/components/Posts';
import { ThumbCard } from '@/components/ThumbCard';

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
        {firstPosts.map(post => (
          <ThumbCard post={post} key={post.date.toLocaleString()} />
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
