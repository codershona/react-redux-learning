import React, { Component } from 'react';

import BasicNav from './basic_nav';

import Showcase from './showcase';


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

    addToShowcae = item => {
        const user = { ...this.state.user };
        user.languages.push(item);
        this.setState({ user });

    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 offset-sm-3'>
                        <h1 className='my-2'>
                            Currently Learning React Context API
                        </h1> 
                        <hr />
                        <BasicNav
                        isAuthenticated={this.state.isAuthenticated}
                        user={this.state.user}
                        login={this.login}
                        logout={this.logout}
                         />  
                         <hr />
                         {this.state.isAuthenticated && (
                             <Showcase 
                             user={this.state.user}
                             addToShowcase={this.addToShowcase}
                             />
                         )}                     
                    </div>
                </div>
            </div>
        );
    }
}

export default App;