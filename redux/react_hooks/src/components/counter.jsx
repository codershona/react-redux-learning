import React from 'react';
import Controller from './controller';


const Counter = ({ counting, increasing, decreasing, reseting }) => {
    return(
        <div>
            <div className='card card-body text-center my-3'>
                <h3>
                    Counts - {counting}
                </h3>
            </div>
            <div className='card card-body text-center'>
                <Controller
                increasing={increasing}
                decreasing={decreasing}
                reseting={reseting}
                />
            </div>
        </div>
    );
};




export default Counter;