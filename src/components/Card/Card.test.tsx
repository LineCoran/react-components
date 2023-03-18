import { screen, render } from '@testing-library/react';
import IHotel from 'types/type';
import { describe, test } from 'vitest';
import Card from './Card';

describe('Testing Card component', () => {
  describe('Testing card props', () => {
    const hotel: IHotel = {
      id: 1,
      name: 'hotel',
      url: 'url',
      price: '500',
      priceStatus: 'correct',
      description: 'somthink',
      location: 'somewhere',
      infoIcon: 'urlIconIfon',
      createdAt: 'time when has benn created',
    };
    const testId = '67badsbuf8';
    beforeEach(() => {
      render(<Card card={hotel} data-testid={testId} />);
    });

    test('render price', () => {
      const price = screen.getByText(hotel.price);
      expect(price).toBeInTheDocument();
    });

    test('render pricestatus', () => {
      const priceStatus = screen.getByText(hotel.priceStatus);
      expect(priceStatus).toBeInTheDocument();
    });

    test('render description', () => {
      const description = screen.getByText(hotel.description);
      expect(description).toBeInTheDocument();
    });

    test('render location', () => {
      const location = screen.getByText(/somewhere/i);
      expect(location).toBeInTheDocument();
    });

    test('render createdAt', () => {
      const createdAt = screen.getByText(hotel.createdAt);
      expect(createdAt).toBeInTheDocument();
    });
  });
});
