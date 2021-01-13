import React, { useState } from 'react';

const MyHook = () => {
    const state = useState(0)
    console.log(state)
    return(
        <div>
            <h3>
                This is hooks basics.
            </h3>
        </div>
    );
};


export default MyHook;