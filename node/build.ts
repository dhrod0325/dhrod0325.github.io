import { MarkdownItConverter, MarkdownReader } from "./markdown-reader";
import fs from "fs";

const markdownReader = new MarkdownReader(new MarkdownItConverter());
const markdowns = markdownReader.toObject(`${__dirname}/@contents`);

function createDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

function makeJsonPosts() {
  const dirPath = `${__dirname}/../public`;
  const postPath = `${dirPath}/posts`;

  createDir(dirPath);
  createDir(postPath);

  fs.writeFileSync(`${postPath}/posts.json`, JSON.stringify(markdowns), {
    flag: "w",
  });
}

makeJsonPosts();
