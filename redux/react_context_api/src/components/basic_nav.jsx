import React from 'react';
import Context from './userContext';

const LoggedInNav = () => {
    return (
        <Context.Consumer>
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

        </Context.Consumer>
    );
};

const LoggedOutNav = () => {
    return (
       <Context.Consumer>
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
       </Context.Consumer>

    );
 
};

/* MAIN COMPONENT :  */

const BasicNav = () => {


    return (
        <Context.Consumer>
            {({ isAuthenticated }) =>


             isAuthenticated ? <LoggedInNav /> : <LoggedOutNav />


            }
        </Context.Consumer>
    );
};


export default BasicNav;

