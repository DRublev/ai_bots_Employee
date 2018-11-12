import React, { Component } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

//Screens
import ViewOwn from './Screens/Orders/ViewOwn';
import ChangeWorkSchedule from './Screens/ChangeWorkSchedule';

const BottomNav = createBottomTabNavigator(
    {
        ChangeWorkSchedule: {
            screen: ChangeWorkSchedule
        }
    }
);

class BottomNavigation extends React.Component {
    static router = BottomNav.router;

    render() {
        const { navigation } = this.props;

        return <BottomNav navigation={navigation} />;
    }
}

export default BottomNavigation;