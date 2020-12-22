import React, { Component } from "react";
import './App.css';
import { createStore } from "redux";


class App extends Component {
  render() {

    // A reducer must have two parameters in this function with State, Action

     const reducer = (state={}, action) => {
        return state
     }


     const store = createStore(reducer)

    return(
      <div className="App">
        <h1>
          Learning Redux From Crash
        </h1>

      </div>
    );
  }
}

export default App;
