import React from 'react';
import { StackNavigator } from 'react-navigation';

//Screens
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';

const Nav = StackNavigator(
    {
        Login: {
            screen: Login
        },
        Register: {
            screen: Register
        },
        Home: {
            screen: Home
        }
    },
    {
        initialRootName: 'Login',
        headerMode: 'none',
    }
);

class Navigator extends React.Component {
    static router = Nav.router;

    render() {
        const { navigation } = this.props;

        return <Nav navigation={navigation} />;
    }
}

export default Navigator;