import { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class extends Component<object, object> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <nav className="nav">
        <ul className="navList">
          <li className="navItem">{<Link to={'/'}>Home</Link>}</li>
          <li className="navItem">{<Link to={'/about'}>About</Link>}</li>
        </ul>
      </nav>
    );
  }
}
