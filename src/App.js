import React, { Component } from 'react';
import './reset.css';
import TodaysDate from "./components/TodaysDate";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodaysDate />
      </div>
    );
  }
}

export default App;
