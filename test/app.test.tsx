import { MarkdownItConverter, MarkdownReader } from '~/node';

describe('내 블로그 앱 테스트', () => {
  it('첫번째 테스트', () => {
    const markdownReader = new MarkdownReader(new MarkdownItConverter());
    const markdowns = markdownReader.readMarkdowns(`${__dirname}/@contents`);

    markdowns.forEach(markdown => {
      const metaData = markdown.getMetaData();

      expect(metaData.get('title')).toEqual('안녕하세요우');
      expect(metaData.get('category')).toEqual('design');
      expect(metaData.get('date')).toEqual('2022-01-10');
      expect(metaData.get('summary')).toEqual('요약222');

      console.log(markdown.getHtml());
    });
  });
});
