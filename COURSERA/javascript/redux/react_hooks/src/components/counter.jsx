import React, {useContext} from 'react';
import Controller from './controller';
import {CountContext} from '../provider/count-provider';

const Counter = () => {

    const {counting} = useContext(CountContext)

    return(
        <div>
            <div className='card card-body text-center my-3'>
                <h3>
                    Counts - {counting}
                </h3>
            </div>
            <div className='card card-body text-center'>
                <Controller
                />
            </div>
        </div>
    );
};




export default Counter;