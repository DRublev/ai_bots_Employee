import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

//Screens
import Login from './Screens/Login';
import Register from './Screens/Register';
import ViewOwnPosition from './Screens/ViewOwnPosition';
import ViewOwn from './Screens/Orders/ViewOwn';
import AddEdit from './Screens/Orders/AddEdit';
import Delete from './Screens/Orders/Delete';
import ChangeWorkSchedule from './Screens/ChangeWorkSchedule';

import User from '../helpers/Api/User';

const Nav = createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register },
        ViewOwnPosition: { screen: ViewOwnPosition },
        ViewOwn: { screen: ViewOwn },
        AddEdit: { screen: AddEdit },
        Delete: { screen: Delete },
        ChangeWorkSchedule: { screen: ChangeWorkSchedule }
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