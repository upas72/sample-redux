import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.handleIncrement(this.props.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.handleDecrement(this.props.id)}
          className="btn btn-secondary btn-sm ml-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.handleDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2 p-1"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    const value = this.props.counters.filter(c => c.id === this.props.id)[0]
      .value;
    let classes = "badge m-2 p-2 badge-";
    classes += value ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const value = this.props.counters.filter(c => c.id === this.props.id)[0]
      .value;
    return value ? value : "Zero";
  }
}

const mapStoreToProps = (state, props) => {
  return {
    counters: state.counters,
    id: props.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrement: id => dispatch({ type: "INCREMENT", key: id }),
    handleDecrement: id => dispatch({ type: "DECREMENT", key: id }),
    handleDelete: id => dispatch({ type: "DELETE", key: id })
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Counter);
