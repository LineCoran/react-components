import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

describe('check main page', () => {
  test('render main', () => {
    render(<Main data-testid="maintestid" />, { wrapper: BrowserRouter });
    const main = screen.getByTestId('maintestid');
    expect(main).toBeInTheDocument();
  });
});
