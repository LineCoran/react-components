import { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

type NavBarProps = {
  pageName: string;
};

export default class extends Component<NavBarProps, object> {
  constructor(props: NavBarProps) {
    super(props);
  }

  render() {
    return (
      <nav className="nav">
        <h2 className="logo">{this.props.pageName}</h2>
        <ul className="navList">
          <li className={this.props.pageName === 'Main' ? 'navItem active' : 'navItem'}>
            {<Link to={'/'}>Home</Link>}
          </li>
          <li className={this.props.pageName === 'About' ? 'navItem active' : 'navItem'}>
            {<Link to={'/about'}>About</Link>}
          </li>
        </ul>
      </nav>
    );
  }
}
