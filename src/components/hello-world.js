import React from "react";

export class HelloMessage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello {this.props.name}</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}
