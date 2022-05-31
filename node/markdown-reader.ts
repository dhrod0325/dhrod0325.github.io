import fs from 'fs';
const markdown = require('markdown-it');
const highlight = require('highlight.js');

export type MarkdownFileType = {
  absolutePath: string;
  body: string;
};

export type MarkdownConstructor = {
  path: string;
  originalText: string;
  convertedText: string;
};

export class Markdown {
  private path: string;
  private originalText: string;
  private convertedText: string;

  private html = '';
  private markdown = '';

  private metaData = new Map<string, string>();

  constructor(constructor: MarkdownConstructor) {
    this.path = constructor.path;
    this.originalText = constructor.originalText;
    this.convertedText = constructor.convertedText;

    this.parse();

    this.parseMarkdown();
  }

  private getOriginalLines() {
    return this.originalText.split('\n');
  }

  private getConvertedLines() {
    return this.convertedText.split('\n');
  }

  private parseMarkdown() {
    let metaParsed = false;

    for (const line of this.getOriginalLines()) {
      if (line === '-->') {
        metaParsed = true;
        continue;
      }

      if (metaParsed) {
        this.markdown += `${line}\n`;
      }
    }
  }

  private parse() {
    let metaParsed = false;

    for (const line of this.getConvertedLines()) {
      if (!line.trim()) {
        continue;
      }

      if (line === '-->') {
        metaParsed = true;
        continue;
      }

      if (line.startsWith('<!--')) {
        continue;
      }

      if (!metaParsed) {
        this.parseMeta(line);
      }

      if (metaParsed) {
        this.parseHtml(line);
      }
    }
  }

  private parseMeta(line: string) {
    const key = line.slice(0, line.indexOf(':')).trim();
    const value = line.slice(line.indexOf(':') + 1).trim();

    this.metaData.set(key, value);
  }

  private parseHtml(line: string) {
    this.html += `${line}`;
  }

  public getMetaData() {
    return this.metaData;
  }

  public getHtml() {
    return this.html.trim();
  }

  getMarkdown() {
    return this.markdown;
  }
}

export interface MarkdownConverter {
  convert(markdownText: string): string;
}

export class FileUtils {
  public static readFileNames(path: string) {
    return fs.readdirSync(path).filter(file => file.endsWith('.md'));
  }

  public static readFile(absolutePath: string): MarkdownFileType {
    return {
      absolutePath,
      body: fs.readFileSync(absolutePath, 'utf8'),
    };
  }

  public static readFileList(path: string) {
    return this.readFileNames(path).map(name => this.readFile(`${path}/${name}`));
  }
}

export class MarkdownReader {
  private markdownConverter: MarkdownConverter;

  constructor(markdownConverter: MarkdownConverter) {
    this.markdownConverter = markdownConverter;
  }

  public readMarkdowns(path: string) {
    const fileList = FileUtils.readFileList(path);

    return fileList.map(file => this.readMarkdown(file));
  }

  private readMarkdown(file: MarkdownFileType): Markdown {
    const convertedText = this.markdownConverter.convert(file.body);
    return new Markdown({ path: file.absolutePath, originalText: file.body, convertedText });
  }
}

export class MarkdownItConverter implements MarkdownConverter {
  convert(markdownText: string): string {
    const md = markdown({
      html: true,
      xhtmlOut: false,
      breaks: false,
      langPrefix: 'language-',
      linkify: true,
      typographer: true,
      quotes: '“”‘’',
      highlight: function (str: string, lang: string) {
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

    return md.render(markdownText);
  }
}
