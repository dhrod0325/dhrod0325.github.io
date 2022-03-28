import { FC, useState } from 'react';
import AppStyle from '../assets/css/App.module.scss';
import logo from '../assets/images/logo.svg';
import { CountButton } from '../components';
import cn from 'classnames';

export const IndexPage: FC = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count => count + 1);
  };

  const countButtonProps = { count, handleButtonClick };

  return (
    <div className={cn(AppStyle.App)}>
      <img src={logo} className={AppStyle.AppLogo} alt="logo" />
      <p>Hello Vite + React!</p>

      <p>
        <CountButton {...countButtonProps} />
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
    </div>
  );
};
