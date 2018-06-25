import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
  };

  onIncrementHandler = (e) => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }))
  }

  onDecrementHandler = (e) => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }))
  }

  onClearHandler = (e) => {
    this.setState(prevState => ({
      counter: 0,
    }))
  }

  render() {
    return (
      <div>
        <p>The value of counter is {this.state.counter}</p>
        <div>
          <input type="button" onClick={this.onIncrementHandler} value="Increment"/>
          <input type="button" onClick={this.onDecrementHandler} value="Decrement"/>
          <input type="button" onClick={this.onClearHandler} value="Clear"/>
        </div>
      </div>
    );
  }
}

export default App;
