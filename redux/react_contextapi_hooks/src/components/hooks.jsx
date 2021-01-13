import React, { useState } from 'react';

const MyHook = () => {
    const [counts, setCount] = useState(100);

    return(
        <div>
            <h3>
                This is hooks basics.
            </h3>
            <h1>
                Count: {counts}
            </h1>
        </div>
    );
};


export default MyHook;