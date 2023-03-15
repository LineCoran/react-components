import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="cardImage"></div>
      <div className="cardPrice">
        <p className="cardPriceValue">32,500,700</p>
        <p className="cardPriceStatus">Guide price</p>
      </div>
      <div className="cardInfo">
        <div className="cardInfoHeader">
          <div className="cardInfoText">
            <div className="cardInfoDescrition">8 bathrooms, and terrace on street</div>
            <div className="cardInfoLocation">Willstione park, Avenue</div>
          </div>
          <div className="cardInfoIcon"></div>
        </div>

        <div className="cardFooter">
          <p className="cardDate"> Added on 25/02/2016</p>
          <div className="cardSendMessage">
            <div className="cardSendMessageIcon"></div>
          </div>
        </div>
      </div>
      <div className="cardHeart">
        <div className="cardHearIcon"></div>
      </div>
    </div>
  );
}
