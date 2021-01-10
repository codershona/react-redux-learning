import React from 'react';
import { Context } from './app';

const LoggedInNav = ({ logout }) => {
    return (
        <Context.Consumer>
      {(user) => (
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

const LoggedOutNav = ({login}) => {
    return (
        <div>
        <p>
            Please Can you Click the Login Button which is given below,
        </p>
        <ul>
            <li onClick={login}>LOGIN</li>
            <li>REGISTER</li>
        </ul>

    </div>

    );
 
};

/* MAIN COMPONENT :  */

const BasicNav = ({ login, logout, isAuthenticated, user }) => {
    if (isAuthenticated) {
        return <LoggedInNav logout={logout}/>;
    }

    return <LoggedOutNav login={login} />;

};


export default BasicNav;

