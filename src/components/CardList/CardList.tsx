import Card from "../Card/Card";
import { Component } from "react";
import IHotel from "types/type";
import "./CardList.css";

type CardListProps = {
  hotels: IHotel[];
};

export default class CardList extends Component<CardListProps, object> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    return (
      <div className="cardList">
        {this.props.hotels.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}
