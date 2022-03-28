import style from '../assets/css/App.module.scss';

import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type NavActive = { isActive: boolean };

export const Gnb: FC = () => {
  const activeClassName = ({ isActive }: NavActive) => (isActive ? style.NavActive : '');

  return (
    <ul>
      <li>
        <NavLink to={'/'} className={activeClassName}>
          INDEX
        </NavLink>
      </li>
      <li>
        <NavLink to={'/todo'} className={activeClassName}>
          TODO PAGE
        </NavLink>
      </li>
    </ul>
  );
};
