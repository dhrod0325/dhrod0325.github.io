const highlight = require('highlight.js');
const path = require('path');
const fs = require('fs');
const markdown = require('markdown-it');

const md = markdown({
  html: true,
  xhtmlOut: false,
  breaks: false,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && highlight.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' + highlight.highlight(lang, str, true).value + '</code></pre>'
        );
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  },
});

const directoryPath = path.join(__dirname, '');

const contentFiles = fs.readdirSync(directoryPath);
const files = contentFiles.filter(file => !file.endsWith('.js'));

const contents = {};

files.forEach(file => {
  const fileName = file.slice(0, file.indexOf('.'));
  const body = fs.readFileSync(`${directoryPath}/${file}`, 'utf8');
  const html = md.render(body);

  const content = {
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
      const commentTitle = line[0].trim();
      const commentContent = line[1].trim();

      content[commentTitle] = commentContent;
    });

  contents[fileName] = content;
});

const fileName = `${directoryPath}/../assets/json/contents.json`;

console.log(`write file : ${fileName}`);
console.log(contents);
fs.writeFileSync(fileName, JSON.stringify(contents));
