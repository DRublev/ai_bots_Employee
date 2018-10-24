import React from 'react';
import { View, TextInput } from 'react-native';
import Screen from './Screen';
import Button from '../Button';

import styles from '../../config';

class Login extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            pass: '',
            btnText: 'Click me so hard, senpai!'
        }
    }

    onLoginBtnHandler = () => {
        this.setState({
            btnText: 'More'
        });
    }

    render() {
        const { login, pass } = this.state;

        return (
            <View style={styles.container}>
                <Button title={this.state.btnText} onPress={this.onLoginBtnHandler} />
            </View>
        );
    }
}

export default Login;