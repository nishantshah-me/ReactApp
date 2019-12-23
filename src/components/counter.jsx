import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.item)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.item.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.props.item.count === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const count = this.props.item.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
