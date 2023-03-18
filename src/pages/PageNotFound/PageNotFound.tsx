import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <h1 data-testid="titleTestId">NOT FOUND PAGE</h1>
        <Link to="/">Home</Link>
      </Container>
    );
  }
}
