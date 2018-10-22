import React from 'react';
import { StyleSheet, Text, View, Button, Picker, AppState, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Screen from './Screen';
import styles from '../../config';
import PushNotification from 'react-native-push-notification';
import PushController from '../PushController';

class Home extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            btnText: 'Click me so hard, pls!'
        }
    }

    onBtnPressedHandler = () => {
        let date = new Date(Date.now() + (this.state.seconds * 1000));

        if (Platform.OS === 'ios') {
            date = date.toISOString();
        }

        PushNotification.localNotification({
            message: "More! More!",
        });
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onBtnPressedHandler}
                    title={this.state.btnText} />
            </View>
        );
    }
}

export default Home;