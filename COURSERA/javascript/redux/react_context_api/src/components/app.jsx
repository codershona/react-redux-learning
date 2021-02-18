import React, { Component, createContext } from 'react';

import BasicNav from './basic_nav';

import Showcase from './showcase';
import { UserProvider, UserConsumer } from './userContext';



class App extends Component {


    render() {
        return (
            <UserProvider>
            <div className='container'>
                <div className='row'>
                    <UserConsumer>
                  {({ isAuthenticated }) => (
                        <div className='col-sm-6 offset-sm-3'>
                        <h1 className='my-2'>
                            Currently Learning React Context API
                        </h1>
                        <hr />
                        <BasicNav
                         />
                         <hr />
                         {isAuthenticated && (
                             <Showcase
                             />
                         )}
                    </div>
                  )}
                  </UserConsumer>
                </div>
            </div>
            </UserProvider>
        );
    }
}

export default App;