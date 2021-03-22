import React, { Component } from 'react';
import './Titles.css';


class Titles extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
           title: 'This is a second Titles',
           isInput: false 
        }
    }


    editHandler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event) {
       /* console.log(event.target.value) */
       this.setState({
           ...this.state,
           title: event.target.value
       })
    }

    keyPressHandler(event) {
      
        /* console.log(event.key) */
        if (event.key === 'Enter') {
            this.setState({
                ...this.state,
                isInput: false

            })
        }
    }

    blurHandler(event) {
        this.setState({
            ...this.state,
            isInput: false

        })
        
    }

     
      
    render() {

       /* let output = <h2> This is React value </h2> */

       let output = null

       if (this.state.isInput) {

        output = (
        <div className="Title">
            <input 
            className="form-control"
            onChange={ event => this.inputChange(event)} 
            type="text"
            onKeyPress= { event => this.keyPressHandler(event) } 
            value={ this.state.title }
            onBlur={ event => this.blurHandler(event)}
            />
    
            </div>
        )

       } else {
           output = (
               <div className="d-flex Titles">
               <h6 className="display-5">
                {this.state.title}
               </h6>
               <span onClick={ () => this.editHandler() } className="ml-auto edit-icon">
                <i className="fas fa-pencil-alt"></i>
               </span>
               </div>
           )
       }
        return(
         <div>
           {output}
         </div>
     

        )
    }


}







export default Titles;