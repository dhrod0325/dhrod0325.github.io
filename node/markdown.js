const markdown = require('markdown-it');
const highlight = require('highlight.js');

export function getMarkdown() {
  return markdown({
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
            '<pre class="hljs"><code>' +
            highlight.highlight(lang, str, true).value +
            '</code></pre>'
          );
        } catch (__) {
          //
        }
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
  });
}
