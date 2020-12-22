import React, { Component } from "react";
import './App.css';
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from './store';
import Count from './components/Count';


class App extends Component {
  render() {
    


    return(
      <Provider store={ store }>
      <div className="App">
        <h1>
          Learning Redux From Crash
        </h1>

        <Count />

      </div>
      </Provider>
    );
  }
}

export default App;
