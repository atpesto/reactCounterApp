import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inc, dec, clear } from './redux/actions';

class App extends Component {

  onIncrementHandler = (e) => {
    this.props.inc();
  }

  onDecrementHandler = (e) => {
    this.props.dec();
  }

  onClearHandler = (e) => {
    this.props.clear();
  }

  render() {
    return (
      <div>
        <p>The value of counter is {this.props.counter.count}</p>
        <div>
          <input type="button" onClick={this.onIncrementHandler} value="Increment"/>
          <input type="button" onClick={this.onDecrementHandler} value="Decrement"/>
          <input type="button" onClick={this.onClearHandler} value="Clear"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
})

const mapDispatchToProps = {
  inc,
  dec,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
