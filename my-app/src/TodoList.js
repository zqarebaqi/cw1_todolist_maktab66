import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: ["do homworks", "go gym", "maktab"],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    console.log(this);
    this.setState({ list: [this.state.value, ...this.state.list], value: "" });
  }

  render() {
    return (
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
          />
          <button onClick={this.addTodo}>add</button>
        </li>
        {this.state.list.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
