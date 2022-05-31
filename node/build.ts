import { MarkdownItConverter, MarkdownReader } from './markdown-reader';
import fs from 'fs';

const markdownReader = new MarkdownReader(new MarkdownItConverter());
const markdowns = markdownReader.readMarkdowns(`${__dirname}/../src/@contents`);

markdowns.forEach(markdown => {
  console.log(markdown);

  const data = {
    html: markdown.getHtml(),
    metaData: Object.fromEntries(markdown.getMetaData()),
    markdown: markdown.getMarkdown(),
  };

  const title = markdown.getMetaData().get('title');

  fs.writeFileSync(`${__dirname}/../public/posts/${title}.json`, JSON.stringify(data), {
    flag: 'w',
  });
});
