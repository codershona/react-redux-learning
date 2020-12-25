import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';
import Titles from './Titles/Titles';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "container py-5">
          <div className="row">
          <div className="col-sm-8 offset-sm-2">
        
         
         
           <Title />
           <Titles />

     
         </div>
         </div>
        </div>
      </div>
    );
  }
}
export default App;
