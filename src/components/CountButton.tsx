import { FC } from 'react';

type CountButtonProps = {
  count: number;
  handleButtonClick: () => void;
};

export const CountButton: FC<CountButtonProps> = props => {
  const { count, handleButtonClick } = props;

  return (
    <button type="button" onClick={handleButtonClick}>
      count is: {count}
    </button>
  );
};
