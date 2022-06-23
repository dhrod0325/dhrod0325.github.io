export type PostMetaType = {
  category: string;
  title: string;
  date: string;
  summary: string;
  thumb: string;
};

export type PostType = {
  html: string;
  markdown: string;
  metaData: PostMetaType;
  tocHtml: string;
  path: string;
};
