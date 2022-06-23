import { MarkdownItConverter, MarkdownReader } from "./markdown-reader";
import fs from "fs";

const markdownReader = new MarkdownReader(new MarkdownItConverter());
const markdowns = markdownReader.toObject(`${__dirname}/@contents`);

function createDir(dirPath: string) {
  if (fs.existsSync(dirPath)) {
    return;
  }

  fs.mkdirSync(dirPath);
}

function createPosts() {
  const dirPath = `${__dirname}/../public`;
  const postPath = `${dirPath}/posts`;

  createDir(dirPath);
  createDir(postPath);

  const filePath = `${postPath}/posts.json`;
  const fileContent = JSON.stringify(markdowns);

  fs.writeFileSync(filePath, fileContent, { flag: "w" });
}

createPosts();
