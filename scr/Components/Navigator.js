import React from 'react';
import { createStackNavigator } from 'react-navigation';

//Screens
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import ViewOwnPosition from './Screens/ViewOwnPosition';
import {
    ViewOwn as ViewOwnOrders,
    AddEdit as AddEditOrder,
    Delete as DeleteOrder
} from './Screens/Orders';
import ChangeWorkSchedule from './Screens/ChangeWorkSchedule';

const Nav = createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register },
        Home: { screen: Home },
        ViewOwnPosition: { screen: ViewOwnPosition },
        ViewOwnOrders: { screen: ViewOwnOrders },
        AddEditOrder: { screen: AddEditOrder },
        DeleteOrder: { screen: DeleteOrder },
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