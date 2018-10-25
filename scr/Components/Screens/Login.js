import React from 'react';
import { View, TextInput } from 'react-native';
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
            btnText: 'Click me so hard, senpai!'
        }
    }

    onLoginHandler = () => {
        this.setState({
            auth: ''
        });

        User.session({
            email: this.state.login,
            password: this.state.pass
        }, (data) => {
            this.setState({
                auth: data.data.auth
            });
        }, (error) => console.warn('error'));

        if (this.state.auth) {
            this.setState({
                btnText: 'U r in... 3-)!'
            });
        }
    }

    onRegisterHandler = () => {
        super.navigate('Register');
    }

    render() {
        const { login, pass } = this.state;
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