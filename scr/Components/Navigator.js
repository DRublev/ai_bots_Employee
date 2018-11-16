import React from 'react';
import { Platform } from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';

import Header from './Header';

//Screens
import AuthLoading from './Screens/AuthLoading';
import ViewOwn from './Screens/Orders/ViewOwn';
import Order from './Screens/Orders/Order';
import ChangeWorkSchedule from './Screens/ChangeWorkSchedule';
import Login from './Screens/Login';

//Navigators
const AuthNavigator = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);

const AppNavigator = createStackNavigator(
    {
        ViewOrders: {
            screen: ViewOwn,
        },
        Schedule: {
            screen: ChangeWorkSchedule,
        },
        Order: {
            screen: Order
        }
    },
    {
        initialRouteName: 'ViewOrders',
        headerMode: 'screen',
        navigationOptions: {
            header: Header
        }
    }
);

const Nav = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppNavigator,
        Auth: AuthNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
);

const uriPrefix = Platform.OS === 'android' ? 'ai-bots://bots' : 'ai-bots://';

class Navigator extends React.Component {
    static router = Nav.router;

    render = () => {
        const { navigation } = this.props;

        return <Nav navigation={navigation}/>
    }
}

export default Navigator;