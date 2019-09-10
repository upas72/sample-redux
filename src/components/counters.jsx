import React, { Component } from "react";
import Counter from "./counter";
import { connect } from "react-redux";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleReset}
          className="btn btn-primary btn-sm m-2 p-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.handleAdd}
          className="btn btn-primary btn-sm m-2 p-2"
        >
          Add
        </button>
        {this.props.counters.map(c => (
          <Counter key={c.id} id={c.id} />
        ))}
      </div>
    );
  }
}

const mapStoreToProps = state => {
  return {
    counters: state.counters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => dispatch({ type: "RESET" }),
    handleAdd: () => dispatch({ type: "ADD" })
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Counters);
