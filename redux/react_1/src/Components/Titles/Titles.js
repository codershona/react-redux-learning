import React, { Component } from 'react';
import './Titles.css';


class Titles extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
           title: 'This is a second Titles',
           isInput: false 
        }
    }

     
      
    render() {

       /* let output = <h2> This is React value </h2> */

       let output = null

       if (this.state.isInput) {

       } else {
           output = (
               <div className="d-flex Titles">
               <h6 className="display-5">
                {this.state.title}
               </h6>
               <span className="ml-auto edit-icon">
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