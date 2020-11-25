import React, { Component } from 'react';


class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: "Hook Tasks",
      references: "Hooks state description",
      schemas: "User id",
      textno: "1999",
      shows: true
    };
  }

   delHeader = () => {
    this.setState({shows: false});
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
    document.getElementById("div10").innerHTML =
    "Before the update, the favorite was " + prevState.textno;
  }


  componentDidUpdate() {
    document.getElementById("div20").innerHTML =
    "The updated favorite is " + this.state.textno;
  }

    componentDidUpdate() {
    document.getElementById("mydivexample").innerHTML =
    "The updated favorite is " + this.state.references;
  }

    shootclicking() {
    alert("Learning React Shots");
  }

    shootbindthis = () => {
    alert(this);
    /*
    The 'this' keyword refers to the component object
    */
  }


  render() {

  	   let MyHeader;
    if (this.state.shows) {
      MyHeader = <Container />;
    };


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

             <div id="div10"></div>
        <div id="div20"></div>

          <div id="mydivexample"></div>

           {MyHeader}

           <button onClick={this.shootclicking}>Learning React Shots!</button>

          <button onClick={this.shootbindthis}>The react bind this method</button>

      </div>
    );
  }
}



class Container extends Component {
  componentWillUnmount() {
    alert("---- The component named Header is about to be unmounted.---- ");
  }
  render() {
    return (
      <h1>I am learning Unmounting emthod for React</h1>
    );
  }
}


export default Car;



