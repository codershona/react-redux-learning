import React, { Component, createContext } from 'react';

import BasicNav from './basic_nav';

import Showcase from './showcase';
import Context from './userContext';



class App extends Component {
    state = {
        user: {
            name: 'Jenny Penye',
            email: 'test@gmail.com',
            languages: [
                'Spanish',
                'Swedish',
                'French',
                'Germany',
                'English'
            ]
        },
        isAuthenticated: true
    };

    login = () => {
        this.setState({isAuthenticated: true});
    };

    logout = () => {
        this.setState({isAuthenticated: false});
    };

    addToShowcase = item => {
        const user = { ...this.state.user };
        user.languages.push(item);
        this.setState({ user });

    };

    render() {
        return (
            <Context.Provider value={{ ...this.state,
            login:this.login,
            logout:this.logout,
            addToShowcase: this.addToShowcase
            }}
            >
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 offset-sm-3'>
                        <h1 className='my-2'>
                            Currently Learning React Context API
                        </h1> 
                        <hr />
                        <BasicNav
                         />  
                         <hr />
                         {this.state.isAuthenticated && (
                             <Showcase
                             />
                         )}                     
                    </div>
                </div>
            </div>
            </Context.Provider>
        );
    }
}

export default App;