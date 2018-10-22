import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

class PushNotifier extends React.Component {
    componentDidMount() {
        PushNotification.configure({
            onNotification: (notification) => {
                console.log('Notification: ', notification);
            },
        });
    }

    newPushNotification = (message) => {
        PushNotification.localNotification({
            message: message,
        });
    };

    render() {
        return null;
    }
}

export default PushNotifier;