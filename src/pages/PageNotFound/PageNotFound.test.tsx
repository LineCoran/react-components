import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

describe('check PageNotFound page', () => {
  test('render PageNotFound', () => {
    render(<PageNotFound />, { wrapper: BrowserRouter });
    const title = screen.getByTestId('titleTestId');
    expect(title).toBeInTheDocument();
  });
});
