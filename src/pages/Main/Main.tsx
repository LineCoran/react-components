import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/UI/SearchBar";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <SearchBar placeholder="Search..." />
      <CardList />
    </div>
  );
}
