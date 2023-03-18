import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Container from '../../components/Container/Container';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <h1 className="aboutTitle" data-testid="testTitleId">
          Hello its about Page
        </h1>
      </Container>
    );
  }
}
