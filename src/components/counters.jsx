import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, count: 2, title: "1st" },
      { id: 2, count: 4, title: "2nd" },
      { id: 3, count: 0, title: "3rd " },
      { id: 4, count: 1, title: "4th" }
    ]
  };

  handleIncrement = item => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(item);
    counters[index].count++;
    this.setState({ counters });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(item => (
          <Counter
            key={item.id}
            item={item}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
