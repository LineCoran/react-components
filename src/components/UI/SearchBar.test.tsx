import { describe, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('SearchBar', () => {
  const testIdValue = 'adsf2214sdfno';
  const placeholder = 'search';
  const inputValue = 'hello';
  const handleInput = vi.fn();
  let input: HTMLInputElement;

  beforeEach(() => {
    render(
      <SearchBar
        data-testid={testIdValue}
        placeholder={placeholder}
        search={inputValue}
        handleInput={handleInput}
      />
    );

    input = screen.getByRole('textbox') as HTMLInputElement;
  });

  test('check default input value', () => {
    expect(input.value).toBe(inputValue);
  });

  test('check default placeholder value', () => {
    expect(input.placeholder).toBe(placeholder);
  });

  test('user change data - called onChange callback', async () => {
    await userEvent.type(input, 'mo');
    expect(handleInput).toBeCalledWith('hellom');
    expect(handleInput).toBeCalledWith('helloo');
  });
});
