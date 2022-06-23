import fs from "fs";
import * as os from "os";

const markdown = require("markdown-it");
const markdownAnchor = require("markdown-it-github-headings");

const highlight = require("highlight.js");
const markdowntoc = require("markdown-toc");

export type MarkdownFileType = {
  path: string;
  absolutePath: string;
  body: string;
};

export type MarkdownConstructor = {
  originalText: string;
  convertedText: string;
  path: string;
};

export class Markdown {
  private originalText: string;
  private convertedText: string;
  private path: string;

  private html = "";
  private markdown = "";

  private metaData = new Map<string, string>();

  constructor(constructor: MarkdownConstructor) {
    this.path = constructor.path;
    this.originalText = constructor.originalText;
    this.convertedText = constructor.convertedText;

    this.parse();

    this.parseMarkdown();
  }

  private getOriginalLines() {
    return this.originalText.split("\n");
  }

  private getConvertedLines() {
    return this.convertedText.split("\n");
  }

  private parseMarkdown() {
    let metaParsed = false;

    const items = [];

    for (const line of this.getOriginalLines()) {
      if (line.trim() === "-->") {
        metaParsed = true;
        continue;
      }

      if (metaParsed) {
        items.push(`${line}`);
      }
    }

    this.markdown = items.join(os.EOL);
  }

  private parse() {
    let metaParsed = false;

    for (const line of this.getConvertedLines()) {
      if (line === "--&gt;</p>") {
        metaParsed = true;
        continue;
      }

      if (line.startsWith("<p>&lt;!--")) {
        continue;
      }

      if (!metaParsed) {
        this.parseMeta(line);
      }

      if (metaParsed) {
        this.parseHtml(line + "\n");
      }
    }
  }

  private parseMeta(line: string) {
    const key = line.slice(0, line.indexOf(":")).trim();
    const value = line.slice(line.indexOf(":") + 1).trim();

    this.metaData.set(key, value);
  }

  private parseHtml(line: string) {
    this.html += `${line}`;
  }

  public getMetaData(key: string) {
    return this.metaData.get(key);
  }

  public entries() {
    return Object.fromEntries(this.metaData);
  }

  public getHtml() {
    return this.html.trim();
  }

  public getMarkdown() {
    return this.markdown;
  }

  public toObject() {
    const markdown = this.getMarkdown();
    const toc = markdowntoc(markdown, { link_prefix: "dsdsdsds" });

    const converter = new MarkdownItConverter();
    const tocHtml = converter.convert(toc.content);

    return {
      html: this.getHtml(),
      metaData: this.entries(),
      path: this.path,
      markdown,
      tocHtml,
    };
  }
}

export interface MarkdownConverter {
  convert(markdownText: string): string;
}

export class FileUtils {
  public static readFileNames(path: string) {
    return fs.readdirSync(path).filter((file) => file.endsWith(".md"));
  }

  public static readFile(absolutePath: string, path: string): MarkdownFileType {
    return {
      path,
      absolutePath,
      body: fs.readFileSync(absolutePath, "utf8"),
    };
  }

  public static readFileList(path: string) {
    return this.readFileNames(path).map((name) =>
      this.readFile(`${path}/${name}`, name.replace(".md", ""))
    );
  }
}

export class MarkdownReader {
  private markdownConverter: MarkdownConverter;

  constructor(markdownConverter: MarkdownConverter) {
    this.markdownConverter = markdownConverter;
  }

  public readMarkdowns(path: string) {
    const fileList = FileUtils.readFileList(path);
    return fileList.map((file) => this.readMarkdown(file));
  }

  public readPlainMarkdowns(path: string) {
    const fileList = FileUtils.readFileList(path);
    return fileList.map((file) => this.readMarkdown(file));
  }

  private readMarkdown(file: MarkdownFileType): Markdown {
    const convertedText = this.markdownConverter.convert(file.body);

    console.log(convertedText);

    return new Markdown({
      originalText: file.body,
      convertedText,
      path: file.path,
    });
  }

  public toObject(path: string) {
    const items = this.readMarkdowns(path);

    return items.map((item) => item.toObject());
  }
}

export class MarkdownItConverter implements MarkdownConverter {
  convert(markdownText: string): string {
    const opts = {
      prefixHeadingIds: false,
      style: "slugify",
      html: true,
      xhtmlOut: false,
      breaks: false,
      langPrefix: "language-",
      linkify: true,
      typographer: true,
      quotes: "“”‘’",
      highlight: function (str: string, lang: string) {
        if (lang && highlight.getLanguage(lang)) {
          const code = highlight.highlight(lang, str, true).value;

          try {
            return `<pre class="hljs"><code>${code}</code></pre>`;
          } catch (e) {
            console.log(e);
          }
        }

        const escapeHtml = md.utils.escapeHtml(str);

        return `<pre class="hljs"><code>${escapeHtml}</code></pre>`;
      },
    };

    const md = markdown().use(markdownAnchor, opts);
    const result = md.render(markdownText);

    return result;
  }
}
