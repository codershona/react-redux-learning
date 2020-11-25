import React, { Component } from 'react';



class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }
  render() {
    return (
      <div>
        <h1>I have a nice Car</h1>
      </div>
    );
  }
}

export default Car;



