import { PostType } from "@/@types";

export async function getPosts() {
  const postsUrl = await fetch("/posts/posts.json");
  return await postsUrl.json();
}

export function getPostByPath(posts: PostType[], path: string | undefined) {
  return posts.find((post) => post.path === path);
}

export function createUtterancScript(issue: string | undefined) {
  const commentScript = document.createElement("script");
  const config = {
    src: "https://utteranc.es/client.js",
    repo: "dhrod0325/dhrod0325.github.io.comment",
    theme: "github-light",
    crossOrigin: "anonymous",
    "issue-term": issue,
    async: true,
  };

  Object.entries(config).forEach(([key, value]) => {
    commentScript.setAttribute(`${key}`, `${value}`);
  });

  return commentScript;
}
