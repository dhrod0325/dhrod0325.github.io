import posts from '@/assets/json/posts.json';
import { PostType, PostsType } from 'blog';

export class PostsWrapper {
  private readonly posts: PostsType;

  constructor() {
    this.posts = posts;

    this.posts.forEach(post => {
      post.date = new Date(post.date);
    });

    this.posts.sort((a, b) => (<Date>b.date).getTime() - (<Date>a.date).getTime());
  }

  public getCategories(): string[] {
    const categories = this.posts.map(post => post.category);
    return [...new Set(categories)];
  }

  public getPostsByCategory(category: string): PostsType {
    return [...this.posts].filter(post => post.category === category);
  }

  public getFirstPostByCategory(category: string): PostType {
    const posts = this.getPostsByCategory(category);

    return (posts.length > 0 ? posts[0] : {}) as PostType;
  }

  public getFirstPostsOfCategory(): PostsType {
    const categories = this.getCategories();

    return categories.map(category => this.getFirstPostByCategory(category));
  }

  public getPostByFileName(fileName: string) {
    return this.posts.filter(post => post.fileName === fileName)[0];
  }

  public getPosts(): PostsType {
    return this.posts;
  }
}
