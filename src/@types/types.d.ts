declare module 'blog' {
  export type PostType = {
    fileName: string;
    category: string;
    html: string;
    title: string;
    summary: string;
    thumb: string;
    date: string | Date;
  };

  export type PostsType = PostType[];
}
