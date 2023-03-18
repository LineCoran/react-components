import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

describe('check About page', () => {
  test('render about', () => {
    render(<About />, { wrapper: BrowserRouter });
    const title = screen.getByTestId('testTitleId');
    expect(title).toBeInTheDocument();
  });
});
