import { MarkdownItConverter, MarkdownReader } from '~/node';

describe('내 블로그 앱 테스트', () => {
  it('첫번째 테스트', () => {
    const markdownReader = new MarkdownReader(new MarkdownItConverter());
    const markdowns = markdownReader.readMarkdowns(`${__dirname}/@contents`);

    markdowns.forEach(markdown => {
      expect(markdown.getMetaData('title')).toEqual('안녕하세요우');
      expect(markdown.getMetaData('category')).toEqual('design');
      expect(markdown.getMetaData('date')).toEqual('2022-01-10');
      expect(markdown.getMetaData('summary')).toEqual('요약222');

      console.log(markdown.getHtml());
    });
  });
});
