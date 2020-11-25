import React, { Component } from 'react';

class Car extends Component {
	constructor() {
		super();
		this.state = { tracks: "yellow" };
	}
  render() {
    return <h2>Hi, I have a { this.state.tracks } Car!</h2>;
  }
}

export default Car;



