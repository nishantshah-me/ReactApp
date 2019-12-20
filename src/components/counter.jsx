import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span className="badge badge-primary">{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
