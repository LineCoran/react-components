import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Container from './Container';

describe('Testing container', () => {
  test('render children in container', () => {
    const testId = 'dsaf12ds21da';
    const node = <div data-testid={testId}></div>;
    render(<Container> {node} </Container>);
    const nodeInContainer = screen.getByTestId(testId);
    expect(nodeInContainer).toBeInTheDocument();
  });
});
