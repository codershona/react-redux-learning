import React from 'react';
import {UserConsumer} from './userContext';

const LoggedInNav = () => {
    return (
        <UserConsumer>
      {({user, logout}) => (
      <div>
            <p>
                This is {user.name}, My LoggedIn with {user.email}
            </p>
            <ul>
                <li>DASHBOARD</li>
                <li onClick={logout}>LOGOUT</li>
            </ul>

        </div>)}

        </UserConsumer>
    );
};

const LoggedOutNav = () => {
    return (
       <UserConsumer>
           {({login}) => (
                <div>
                <p>
                    Please Can you Click the Login Button which is given below,
                </p>
                <ul>
                    <li onClick={login}>LOGIN</li>
                    <li>REGISTER</li>
                </ul>
        
            </div>
           )}
       </UserConsumer>

    );
 
};

/* MAIN COMPONENT :  */

const BasicNav = () => {


    return (
        <UserConsumer>
            {({ isAuthenticated }) =>


             isAuthenticated ? <LoggedInNav /> : <LoggedOutNav />


            }
        </UserConsumer>
    );
};


export default BasicNav;

