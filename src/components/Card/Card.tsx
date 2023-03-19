import React, { Component } from 'react';
import IHotel from 'types/type';
import SvgIcons from '../SvgIcons/SvgIcons';
import './Card.css';

type CardProps = {
  card: IHotel;
};

export default class Card extends Component<CardProps, object> {
  constructor(props: CardProps) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img className="cardImage" src={this.props.card.url} alt="hotel-image" />
        <div className="cardPrice">
          <p className="cardPriceValue">{this.props.card.price}</p>
          <p className="cardPriceStatus">{this.props.card.priceStatus}</p>
        </div>
        <div className="cardInfo">
          <div className="cardInfoHeader">
            <div className="cardInfoText">
              <div className="cardInfoDescrition">{this.props.card.description}</div>
              <div className="cardInfoLocation">{this.props.card.location}</div>
            </div>
            <img className="cardInfoIcon" src={this.props.card.url} alt="hotel-image" />
          </div>
          <div className="cardFooter">
            <p className="cardDate">{this.props.card.createdAt}</p>
            <div className="cardSendMessage">
              <SvgIcons id="message" />
            </div>
          </div>
        </div>
        <div className="cardHeart">
          <SvgIcons id="heart" />
        </div>
      </div>
    );
  }
}
