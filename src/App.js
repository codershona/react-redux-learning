import React, { Component } from 'react';


class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: "Hook Tasks",
      references: "Hooks state description",
      schemas: "User id",
      textno: "1999"
    };
  }

   changeReferences = () => {
    this.setState({references: "Add Dashbord description"});
  }
 
    changeTextno = () => {
    this.setState({textno: "Add Dashbord description"});
  }


    componentDidMount() {
    setTimeout(() => {
      this.setState({textno: "2020"})
    }, 1000)
  }

    shouldComponentUpdate() {
    return true;
  }


    getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.textno;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.textno;
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


       <h1>My Text no. is {this.state.textno}</h1>

       <button
          type="button"
          onClick={this.textno}
        >We are changing Text No.</button>

             <div id="div1"></div>
        <div id="div2"></div>
     
      </div>
    );
  }
}
export default Car;



