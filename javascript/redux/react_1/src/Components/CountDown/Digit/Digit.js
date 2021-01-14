import React from 'react';
import './Digit.css';


const Digit = (props) => {

    return (
     <div className="Digit mx-3 text-center" style={ {borderColor: props.color} }>
         <h5 className="display-3 py-4" style={{ color: props.color }}>
             { props.value < 10 ? `0${props.value}` : props.value }
         </h5>
         </div>
    )
} 


export default Digit;