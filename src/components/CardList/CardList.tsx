import Card from '../Card/Card';
import { Component } from 'react';
import IHotel from 'types/type';
import './CardList.css';

type CardListProps = {
  hotels: IHotel[];
  search: string;
};

export default class CardList extends Component<CardListProps, object> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    const searchedHotels = [
      ...this.props.hotels.filter((hotel) => hotel.description.includes(this.props.search)),
    ];
    return (
      <div className="cardList" data-testid="cardListTestId">
        {searchedHotels.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}
