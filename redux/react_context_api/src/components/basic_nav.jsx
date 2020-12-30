import React from 'react';

const LoggedInNav = ({logout, user}) => {
    return (
        <div>
            <p>
                This is {user.name}, My LoggedIn with {user.email}
            </p>
            <ul>
                <li>DASHBOARD</li>
                <li onClick={logout}>LOGOUT</li>
            </ul>

        </div>
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
        return <LoggedInNav logout={logout} user={user} />;
    }

    return <LoggedOutNav login={login} />;

};


export default BasicNav;

