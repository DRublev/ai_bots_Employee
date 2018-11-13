import React from 'react';
import { Platform } from 'react-native';
import {
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

//Screens
import AuthLoading from './Screens/AuthLoading';
import ViewOwn from './Screens/Orders/ViewOwn';
import Order from './Screens/Orders/Order';
import ChangeWorkSchedule from './Screens/ChangeWorkSchedule';
import Login from './Screens/Login';

import User from '../helpers/Api/User';

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

const AppNavigator = createBottomTabNavigator({
    ViewOrders: {
        screen: ViewOwn,
        path: 'orders'
    },
    Schedule: {
        screen: ChangeWorkSchedule,
        path: 'schedule'
    },
    Order: {
        screen: Order,
        path: 'order/:order'
    }
});

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

        return <Nav navigation={navigation} uriPrefix={uriPrefix} />
    }
}

export default Navigator;