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
            <button onClick={() => setCount(counts + 1)}>
                Increase
            </button>
            <button onClick={() => setCount(prev => prev -1)}>
                Decrease
            </button>
            <button onClick={() => setCount(100)}>
                Re-establish
            </button>
        </div>
    );
};


export default MyHook;