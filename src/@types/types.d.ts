declare module 'blog' {
  export type Post = {
    fileName: string;
    category: string;
    html: string;
    title: string;
    summary: string;
    thumb: string;
    date: string | Date;
  };

  export type Posts = Post[];
}
