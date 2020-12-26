import React, { Component } from 'react';


class Title extends Component {
   
    constructor(props) {
        super(props)

        /* this.number = 0 */
        this.state = {
            number: 0
        }
    }

   counter() {
        /* this.number = this.number + 1; */
        /* this.state.number = this.number + 1 */

       this.setState({
            number: this.state.number + 1
        }) 

         console.log( this.state.number ) } 
     
      
    render() {
        return(
            /* <h5>
                The Title Component was : {this.props.name} and Email address: ({this.props.email})
            </h5> */
  
        <div>
            <p>
                { this.state.number }
                </p>
                <p>
                <button onClick={ () => this.counter() }>
                CLICK HERE
                </button>
            </p>
        </div>
     

        );
    }


}







export default Title;