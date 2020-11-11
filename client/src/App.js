import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import handleClick from './utils/restClient';

class App extends Component {
  constructor(){
    super();

    this.state = {};
    this.handleClick = handleClick.bind(this);
  }

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>The current time is {currentTime}.</p>
      </div>
    );
  }
}

export default App;
