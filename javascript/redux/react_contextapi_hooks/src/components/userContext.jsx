import React, { createContext, Component } from 'react';


let Context = null;

const { Provider, Consumer } = (Context = createContext());

class UserProvider extends Component {
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
            <Provider
                     value={{ ...this.state,
            login:this.login,
            logout:this.logout,
            addToShowcase: this.addToShowcase
            }}>
                {this.props.children}
            </Provider>
        )
    }
}


export { UserProvider, Consumer as UserConsumer, Context as UserContext };