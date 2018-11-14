import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Screen from './Screen';
import Button from '../Button';
import styles from '../../config';

//Helpers
import User from '../../helpers/Api/User';
import Service from "../../helpers/Api/Service";
import CRMOrder from "../../helpers/Api/CRMOrder";

const config = require('../../config.js');

class Login extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            pass: '',
            error: ''
        }
    }

    onLoginHandler = () => {
        User.session({
            email: this.state.login,
            password: this.state.pass
        }, (data) => {
            this.navigate('AuthLoading');
        }, () => {
            this.setState({
                error: 'Неверный логин или пароль'
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {this.state.error}
                </Text>
                <TextInput style={styles.textInput}
                    onChangeText={(text) => {
                        this.setState({
                            login: text
                        });
                    }} />
                <TextInput style={styles.textInput}
                    onChangeText={(val) => {
                        this.setState({
                            pass: val
                        });
                    }}
                    secureTextEntry={true} />

                <Button title={'Войти'} onPress={this.onLoginHandler} />
            </View>
        );
    }
}

export default Login;