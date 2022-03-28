import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const { pathname } = useLocation();

  return <h1>{pathname} 페이지는 존재하지 않습니다.</h1>;
};
