import React, { Component } from "react";

class Newtodoo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["zahra", "seraj", "mahor"],
    };
  }

  render() {
    return (
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ list: [...this.state.list, e.target.value] });
            }}
          />
        </li>
        {this.state.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

export default Newtodoo;
