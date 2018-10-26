import React from 'react';
import { Text, View, TextInput, AppState, Platform } from 'react-native';
import Button from '../Button';
import Screen from './Screen';
import styles from '../../config';
import PushController from '../PushController';


//Helpers
import User from '../../helpers/Api/User';

class Register extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            login: 'test@test.ru',
            pass: 'test@test.ru',
            confirm: 'test@test.ru',
            responseText: ''
        }
    }

    onRegHandler = () => {
        var { login, pass, confirm } = this.state;

        if (confirm !== pass) {
            this.setState.state({
                errors: {
                    confirm: 'Пароли должны совпадать'
                }
            });

            return;
        }

        User.register({
            email: login,
            password: pass,
            usertype: 'user'
        }, (response) => {
            this.setState({
                responseText: response
            });
        }, (error) => {
            this.setState({
                responseText: error
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.responseText}</Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.setState({ login: val })}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.setState({ pass: val })}
                    textContentType={'password'}
                />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.setState({ confirm: val })}
                    textContentType={'password'}
                />

                <Button onPress={this.onRegHandler}
                    title='Зарегестрироваться' />
            </View>
        );
    }
}

export default Register;