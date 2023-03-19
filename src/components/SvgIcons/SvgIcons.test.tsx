import { describe, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import SvgIcons from './SvgIcons';
import React from 'react';

describe('SvgIcons', () => {
  test('render search icon', () => {
    render(<SvgIcons id="search" />);
    const svg = screen.getByTestId('search');
    expect(svg).toBeInTheDocument();
  });

  test('render heart icon', () => {
    render(<SvgIcons id="heart" />);
    const svg = screen.getByTestId('heart');
    expect(svg).toBeInTheDocument();
  });

  test('render message icon', () => {
    render(<SvgIcons id="message" />);
    const svg = screen.getByTestId('message');
    expect(svg).toBeInTheDocument();
  });

  test('break must be work on search', () => {
    render(<SvgIcons id="search" />);
    const svg = screen.getAllByTestId('search');
    expect(svg.length).toBe(1);
  });

  test('break must be work on heart', () => {
    render(<SvgIcons id="heart" />);
    const svg = screen.getAllByTestId('heart');
    expect(svg.length).toBe(1);
  });

  test('break must be work on message', () => {
    render(<SvgIcons id="message" />);
    const svg = screen.getAllByTestId('message');
    expect(svg.length).toBe(1);
  });

  test('check default return', () => {
    render(<SvgIcons id="default" />);
    const svg = screen.getByTestId('empty-svg');
    expect(svg).toBeInTheDocument();
  });
});
