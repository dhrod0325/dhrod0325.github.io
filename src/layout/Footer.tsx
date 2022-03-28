import style from '../assets/css/App.module.scss';

import { FC } from 'react';
import classNames from 'classnames';

export const Footer: FC = () => {
  return <footer className={classNames(style.Bar)}>Footer</footer>;
};
