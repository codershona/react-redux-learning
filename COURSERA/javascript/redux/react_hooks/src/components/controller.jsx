import React, {useContext} from 'react';
import {CountContext} from '../provider/count-provider';

const Controller = () => {
    const { increasing, decreasing, resetting } = useContext(CountContext)
    return(
        <div>
            <button onClick={() => increasing()} className='btn btn-secondary mx-2'>
                INCREASING
            </button>
            <button onClick={() => decreasing()} className='btn btn-secondary mx-2'>
                DECREASING
            </button>
            <button onClick={() => resetting()} className='btn btn-danger mx-2'>
                RESETTING
            </button>
        </div>
    );
};




export default Controller;