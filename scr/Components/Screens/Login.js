import React from 'react';
import { View, TextInput, AsyncStorage } from 'react-native';
import Screen from './Screen';
import Button from '../Button';
import styles from '../../config';

//Helpers
import User from '../../helpers/Api/User';

class Login extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            login: 'admin@admin.ru',
            pass: 'admin@admin.ru',
            btnText: 'Вход'
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
            this.setState({
                auth: data.auth
            });
        });

        if (this.state.auth) {
            this.setState({
                btnText: 'Вы вошли!'
            });
        }
    }

    onRegisterHandler = () => {
        this.navigate('Register');
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
                    }} />

                <Button title={this.state.btnText} onPress={this.onLoginHandler} />
                <Button title={'Регистрация'} onPress={this.onRegisterHandler} />
            </View>
        );
    }
}

export default Login;