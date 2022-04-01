import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '@/App';

global.React = React;

describe('내 블로그 앱 테스트', () => {
  it('첫번째 테스트', () => {
    render(<App />);
    const test = screen.getByText('dhrod0325.github.io');
    console.log(test);
  });
});
