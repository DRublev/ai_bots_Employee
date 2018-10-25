import React, { Component } from 'react';
var PushNotification = require('react-native-notifications');

export default class PushController extends Component {
    componentDidMount() {
        PushNotification.configure({
            onNotification: function (notification) {
                console.log('NOTIFICATION:', notification);
            },
        });
    }

    render() {
        return null;
    }
}