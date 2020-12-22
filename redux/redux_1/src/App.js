import React, { Component } from "react";
import './App.css';
import { createStore } from "redux";


class App extends Component {
  render() {

    // A reducer must have two parameters in this function with State, Action

     const reducer = (state={}, action) => {
       if (action.type === 'A') {
         return {
           ...state,
           A: ' This is Redux'
         }
       }
       if (action.type === 'X') {
         return {
           ...state,
           X: 'I am creating a redux store'
         }
       }
        return state
     }


     const store = createStore(reducer)

     store.subscribe(() => {
       console.log(store.getState())
     })

     store.dispatch({type: 'X'})
     store.dispatch({type: 'Redux testing for type 1'})
     store.dispatch({type: 'Redux testing for type 2'})
     store.dispatch({type: 'Redux testing for type 3'})
     store.dispatch({type: 'A'})
     store.dispatch({type: 'Redux testing for type 5'})
     store.dispatch({type: 'Redux testing for type 6'})


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
