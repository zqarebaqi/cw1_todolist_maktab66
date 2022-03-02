import React, { Component } from "react";

class Todoitem extends Component {
  render() {
    console.log(this.props);
    return (
      <li
        style={{
          background: "pink",
          color: "black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {this.props.index}- {this.props.title}
        <button onClick={this.props.remove}>x</button>
        <button onClick={this.props.done}>done</button>
      </li>
    );
  }
}

export default Todoitem;
