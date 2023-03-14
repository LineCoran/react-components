import React, { Component } from "react";

export default class SearchBar extends Component<object, { num: number; input: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      num: 0,
      input: "",
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ ...this.state, num: this.state.num + 1 });
  }

  handleChange = (value: string) => {
    this.setState({ ...this.state, input: value });
  };
  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.increment}>Click</button>
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.value)}
          value={this.state.input}
        />
      </div>
    );
  }
}
