import React from 'react';
import { createStackNavigator } from 'react-navigation';

//Screens
import Home from './Screens/Home';
import Login from './Screens/Login';

const Nav = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Login: {
            screen: Login
        }
    },
    {
        initialScreenName: Home,
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