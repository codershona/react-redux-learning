import React, { Component } from 'react';


class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: "Hook Tasks",
      references: "Hooks state description",
      schemas: "User id",
      textno: 1999
    };
  }

   changeReferences = () => {
    this.setState({references: "Add Dashbord description"});
  }


  render() {
    return (
      <div>
        <h1>My {this.state.tracks}</h1>
        <p>
          It is a {this.state.textno}
          </p>
            <p>
          {this.state.schemas}
          </p>
          <p>
            from {this.state.references}.
        </p>

            <button
          type="button"
          onClick={this.changeReferences}
        >We are changing Tracks References</button>


      </div>
    );
  }
}
export default Car;



