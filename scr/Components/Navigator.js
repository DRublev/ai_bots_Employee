import React from 'react';
import {
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

//Screens
import AuthLoading from './Screens/AuthLoading';
import ViewOwn from './Screens/Orders/ViewOwn';
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
        screen: ViewOwn
    },
    Schedule: {
        screen: ChangeWorkSchedule
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

class Navigator extends React.Component {
    static router = Nav.router;

    render = () => {
        const { navigation } = this.props;

        return <Nav navigation={navigation} />
    }
}

export default Navigator;