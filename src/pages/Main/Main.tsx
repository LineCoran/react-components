import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/UI/SearchBar';
import cardInfo from '../../assets/cardInfo.json';
import { Component } from 'react';
import './Main.css';

const { hotels } = cardInfo;

type MainState = {
  search: string;
};

export default class Main extends Component<object, MainState> {
  constructor(props: object) {
    super(props);
    this.state = { search: window.localStorage.getItem('search') || '' };
  }

  // componentDidMount(): void {
  //   this.setState({ ...this.state, search: window.localStorage.getItem('search') || '' });
  // }

  componentWillUnmount(): void {
    console.log('hello');
    console.log(this.state.search);
    window.localStorage.setItem('search', this.state.search);
  }

  handleInput = async (value: string) => {
    this.setState({ ...this.state, search: value });
    // window.localStorage.setItem('search', this.state.search);
  };
  render() {
    return (
      <div className="main">
        <SearchBar
          placeholder="Search.."
          handleInput={this.handleInput}
          search={this.state.search}
        />
        <CardList hotels={hotels} search={this.state.search} />
      </div>
    );
  }
}
