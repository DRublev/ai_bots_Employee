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
            login: 'test1@test.ru',
            pass: 'test1@test.ru',
            confirm: 'test1@test.ru'
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
            usertype: 'admin'
        }, (response) => {
            /*this.setState({
                responseText: response.status
            });*/
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
                    onChangeText={(text) => this.setState({ 'login': text })} />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ 'pass': text })}
                    secureTextEntry={true} />

                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ 'confirm': text })} />

                <Button onPress={this.onRegHandler}
                    title='Зарегестрироваться' />
            </View>
        );
    }
}

export default Register;