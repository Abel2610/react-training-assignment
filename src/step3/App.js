import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
};

// Action
const increaseAction = { type: "increase" };

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default App;
