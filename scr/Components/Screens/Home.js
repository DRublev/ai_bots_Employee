import React from 'react';
import { Text, View, Platform } from 'react-native';
import Screen from './Screen';
import styles from '../../config';
import PushController from '../PushController';
import Button from '../Button';

import User from '../../helpers/Api/User';

class Home extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            btnText: 'Click me so hard, pls!',
            users: {},
            auth: ''
        }
    }

    onLoginHandler = () => {
        User.session({}, (data) => {
            console.warn(data);
        }, (error) => {
            console.warn(error);
        });
    }

    onBtnPressedHandler = () => {
        let date = new Date(Date.now() + (this.state.seconds * 1000));

        if (Platform.OS === 'ios') {
            date = date.toISOString();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Login'} onPress={this.onLoginHandler} />
                <Button title={'Load users'} onPress={this.onBtnPressedHandler} />
            </View>
        );
    }
}

export default Home;