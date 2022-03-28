import style from '../assets/css/App.module.scss';

import { FC } from 'react';
import classNames from 'classnames';

export const Header: FC = () => {
  return <header className={classNames(style.Bar)}>Header</header>;
};
