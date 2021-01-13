import React from 'react';


const Controller = ({increasing, decreasing, reseting }) => {
    return(
        <div>
            <button onClick={increasing} className='btn btn-secondary mx-2'>
                INCREASING
            </button>
            <button onClick={decreasing} className='btn btn-secondary mx-2'>
                DECREASING
            </button>
            <button onClick={reseting} className='btn btn-danger mx-2'>
                RESETING
            </button>
        </div>
    );
};




export default Controller;