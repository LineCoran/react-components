import React, { Component } from "react";
import SvgIcons from "../SvgIcons/SvgIcons";
import "./SearchBar.css";

type SearchBarProps = {
  placeholder: string;
  handleInput: (value: string) => void;
  search: string;
};

export default class SearchBar extends Component<SearchBarProps, { input: string }> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      input: window.localStorage.getItem("search") || "",
    };
  }

  handleChange = (value: string) => {
    this.setState({ ...this.state, input: value });
    window.localStorage.setItem("search", value);
  };
  render() {
    return (
      <div className="searchWrapper">
        <div className="searchIcon">
          <SvgIcons id="search" />
        </div>
        <input
          className="searchBar"
          type="text"
          onChange={(e) => this.props.handleInput(e.target.value)}
          value={this.props.search}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
