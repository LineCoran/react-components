import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import CardList from './CardList';
import cardInfo from '../../assets/cardInfo.json';

describe('Testing Card component', () => {
  test('render cardlist', () => {
    render(<CardList hotels={cardInfo.hotels} search="" />);
    const cardList = screen.getByTestId('cardListTestId');
    expect(cardList).toBeInTheDocument();
  });
});
