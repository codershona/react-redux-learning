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
          <Title name='Beginner' email='react@email.com' />
          <Title name='Advance' email='advancereact@email.com' />
         </h1>
        </div>
      </div>
    );
  }
}
export default App;
