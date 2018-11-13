import React from 'react';
import { View, TextInput } from 'react-native';
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
            login: 'admin@admin.ru',
            pass: 'admin@admin.ru'
        }
    }

    onLoginHandler = async () => {
        this.setState({
            auth: ''
        });

        User.session({
            email: this.state.login,
            password: this.state.pass
        }, (data) => {
            this.navigate('AuthLoading');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onChange={(val) => {
                        this.setState({
                            login: val
                        });
                    }} />
                <TextInput style={styles.textInput}
                    onChange={(val) => {
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