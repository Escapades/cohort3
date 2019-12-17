import React, { Component } from 'react'
// import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent';
import Even from './components/EvenComponent';
import Odd from './components/OddComponent';

class App extends Component {
  constructor() {
    super();
    this.counter = 0;
    this.state = {
      myState: "TBD"
    };

  }

  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    console.log(this.counter);

    this.setState({
      myState: "now:" + this.counter
    });

  }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>I am in control of this application and my name is Dean {this.counter} {this.state.myState} </h1>         
          {/* Edit <code>src/App.js</code> and save to reload. */}

          <button onClick={this.onPushMe}>
            Push Me
          </button>

          <MyComponent whatToSay="What Ever" pushMe={this.onPushMe}/>
          <Even number={this.counter}/>
          <Odd number={this.counter}/> 


        </p>
        Edit <code>src/App.js</code> and save to reload.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
