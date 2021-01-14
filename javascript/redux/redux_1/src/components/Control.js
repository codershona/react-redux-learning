import React from 'react';
import { connect } from 'react-redux';


const Control = (props) => {
  return (
    <div>
      <button onClick={ () => props.add() }>
          + ADD
      </button>
      <button onClick={ () => props.subtract() }>
          - SUBTRACT
      </button>
      <button onClick={ () => props.multiply() }>
          * MULTIPLY
      </button>
    </div>
  );
};


function mapDispatchToProps(dispatch) {

    return {
        add: () => {
            dispatch({ type: 'ADD' })
        },
        subtract: () => {
            dispatch({ type: 'SUBTRACT' })
        },
        multiply: () => {
            dispatch({ type: 'MULTIPLY' })
        }
    }

}


export default connect(null, mapDispatchToProps)(Control);