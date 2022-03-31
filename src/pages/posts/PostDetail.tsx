import { FC } from 'react';
import contents from '@/assets/json/contents.json';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';

export const PostDetail: FC = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const content = contents[id];

  console.log(content, contents, id);

  return <main className="container">{parser(content.html)}</main>;
};
