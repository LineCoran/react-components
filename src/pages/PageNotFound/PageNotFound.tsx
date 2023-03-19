import { Component } from 'react';
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default class About extends Component {
  render() {
    return (
      <Container>
        <h1 className="title" data-testid="titleTestId">
          NOT FOUND PAGE
        </h1>
        <Link to="/">Home</Link>
      </Container>
    );
  }
}
