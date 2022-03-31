const path = require('path');
const fs = require('fs');
const { getMarkdown } = require('./markdown');

const md = getMarkdown();

const directoryPath = path.join(__dirname, '../src/@contents');
const contentFiles = fs.readdirSync(directoryPath);
const files = contentFiles.filter(file => !file.endsWith('.js'));

const posts = [];

files.forEach(file => {
  const fileName = file.slice(0, file.indexOf('.'));
  const body = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
  const html = md.render(body);

  const post = {
    fileName,
    html,
  };

  body
    .slice(body.indexOf('<!--'), body.indexOf('-->'))
    .replace('<!--', '')
    .trim()
    .split('\n')
    .filter(e => e.trim().length > 0)
    .forEach(e => {
      const line = e.split(':');
      const [key, value] = line;

      post[key.trim()] = value.trim();
    });

  posts.push(post);
});

const fileName = `${directoryPath}/../assets/json/posts.json`;

console.log(`write file : ${fileName}`);

fs.writeFileSync(fileName, JSON.stringify(posts));
