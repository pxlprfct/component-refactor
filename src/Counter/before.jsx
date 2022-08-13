import React from "react";

class Clickme extends React.Component {
  constructor(props) {
    super(props);
    this.reduce = this.reduce.bind(this);
    this.state = { count: 0 };
  }
  reduce() {
    this.state.count = this.state.count + -1;
    this.forceUpdate();
  }
  render() {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div>Clicker Count {this.state.count}</div>
        <br />
        <button
          onClick={() => {
            this.state.count = this.state.count + 1;
            this.forceUpdate();
          }}
        >
          Add one
        </button>{" "}
        <button onClick={this.reduce}>Reduce by one</button>
      </div>
    );
  }
}
export default Clickme;
