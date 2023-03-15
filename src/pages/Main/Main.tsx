import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/UI/SearchBar";
import cardInfo from "../../assets/cardInfo.json";
import { Component } from "react";
import "./Main.css";

const { hotels } = cardInfo;

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <SearchBar placeholder="Search..." />
        <CardList hotels={hotels} />
      </div>
    );
  }
}
