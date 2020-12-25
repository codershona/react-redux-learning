import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "container">
         <h1 className="display-4">
         React Crash Course
          <Title name='Beginner' />
          <Title name='Advance' />
         </h1>
        </div>
      </div>
    );
  }
}
export default App;
