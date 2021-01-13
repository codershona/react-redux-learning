import React, { useState, useEffect, useContext } from 'react';

import {UserContext} from './userContext';

const MyHook = () => {
    const [counts, setCounts] = useState(100);

    const [ages, setAges] = useState(24);

    const [apiposts, setApiPost] = useState({});

    const {user} = useContext(UserContext);


    useEffect(() => {
        console.log('Count Updated it!', counts);

        return () => {
         console.log('UNSUBSCRIBED!');
        };
    }, [counts, ages]);

    useEffect(() => {
      console.log('I have some values', ages);
      // document.title = 'This has some values ' + ages;
    }, [ages]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => setApiPost(data))
        .catch(err => console.log(err))
    }, []);



    return(
        <div>
            <h3>
                This is hooks basics.
            </h3>
            <h1>
                Count: {counts}
            </h1>
            <button onClick={() => setCounts(counts + 1)}>
                Increase
            </button>
            <button onClick={() => setCounts(prev => prev -1)}>
                Decrease
            </button>
            <button onClick={() => setCounts(100)}>
                Re-establish
            </button>
            <div>
                <hr />
                <h2>
                    Her Ages was: {ages}
                </h2>
                <button onClick={() => setAges(ages + 1)}>
                    Increase Ages
                </button>
            </div>
            <hr />
            <div>
                <h3>
                    This was {user.name}
                </h3>
                <h3>
                    This email was {user.email}
                </h3>
                <hr />
            </div>
            <div>
                {Object.keys(apiposts).length > 0 && (
                    <>
                    <h3>
                        Title: {apiposts.title}
                    </h3>
                    <p>
                        <strong>
                            BODY: {apiposts.body}
                        </strong>

                    </p>
                    </>
                )}
            </div>
        </div>
    );
};


export default MyHook;