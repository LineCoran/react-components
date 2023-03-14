import Card from "../../components/Card/Card";
import SearchBar from "../../components/UI/SearchBar";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <SearchBar placeholder="Search..." />
      <Card />
    </div>
  );
}
