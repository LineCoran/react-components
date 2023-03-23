import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import cardInfo from '../../assets/cardInfo.json';
import { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
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

  componentDidMount(): void {
    this.setState({ ...this.state, search: window.localStorage.getItem('search') || '' });
  }

  componentWillUnmount(): void {
    console.log(this.state.search);
    window.localStorage.setItem('search', this.state.search);
  }

  handleInput = async (value: string) => {
    this.setState({ ...this.state, search: value });
  };
  render() {
    return (
      <div data-testid="maintestid">
        <Container>
          <NavBar pageName="Main" />
          <SearchBar
            placeholder="Search.."
            handleInput={this.handleInput}
            search={this.state.search}
          />
          <CardList hotels={hotels} search={this.state.search} />
        </Container>
      </div>
    );
  }
}
