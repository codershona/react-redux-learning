import React, { Component } from "react";
import './App.css';
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from './store';
import Count from './components/Count';
import Control from './components/Control';


class App extends Component {
  render() {
    


    return(
      <Provider store={ store }>
      <div className="App">
        <h1>
          Learning Redux From Crash
        </h1>

        <Count />
        <Control />

      </div>
      </Provider>
    );
  }
}

export default App;
