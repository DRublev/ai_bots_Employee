import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Screens/Home';
import Login from './Screens/Login';

const Nav = createStackNavigator(
    {
        Home: {
            screen: Login
        },
        Login: {
            screen: Login
        }
    },
    {
        initialScreenName: Login,
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