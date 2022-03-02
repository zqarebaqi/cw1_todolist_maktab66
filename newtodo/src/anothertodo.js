import React, { Component } from "react";
import Todoitem from "./todoitem";
class Anothertodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: ["zahra", "seraj", "mahor"],
      done: [""],
    };
    this.addtodo = this.addtodo.bind(this);
    this.removetodo = this.removetodo.bind(this);
    this.donetodo = this.donetodo.bind(this);
  }

  addtodo() {
    this.setState({ list: [this.state.value, ...this.state.list], value: "" });
  }

  removetodo(item) {
    let list = this.state.list.filter((l) => l !== item);
    this.setState({ list: list });
  }

  donetodo(item) {
    this.setState({ done: [item, ...this.state.done] });
    this.removetodo(item);
  }
  render() {
    return (
      <ul>
        <li>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
          />

          <button onClick={this.addtodo}>add</button>
        </li>
        {this.state.list.map((item, i) => (
          <Todoitem
            title={item}
            index={i + 1}
            remove={() => this.removetodo(item)}
            done={() => this.donetodo(item)}
          />
        ))}

        {this.state.done.map((ditem) => (
          <li>{ditem}</li>
        ))}
      </ul>
    );
  }
}

export default Anothertodo;
