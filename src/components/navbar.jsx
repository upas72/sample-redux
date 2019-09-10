import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Cart{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.counters.filter(c => c.value > 0).length}
          </span>
        </a>
      </nav>
    );
  }
}

const mapStoreToProps = state => {
  return {
    counters: state.counters
  };
};

export default connect(mapStoreToProps)(Navbar);
