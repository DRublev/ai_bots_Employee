import React from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Screen from './Screen';
import styles from '../../config';

class Login extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            pass: ''
        }
    }

    onLoginBtnHandler = () => {

    }

    render() {
        const { login, pass } = this.state;

        return (
            <ThemeProvider>
                <View style={styles.container}>
                    <TextInput
                        onChange={(val) => this.setState({ login: val })}
                    />
                    <TextInput
                        onChange={(val) => this.setState({ pass: val })}
                        textContentType={'password'}
                    />
                    <Button
                        onPress={this.onLoginBtnHandler}
                        title='Login' />
                </View>
            </ThemeProvider>
        );
    }
}

export default Login;