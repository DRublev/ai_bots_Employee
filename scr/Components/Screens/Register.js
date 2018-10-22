import React from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Screen from './Screen';
import styles from '../../config';

class Register extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            pass: '',
            confirm: ''
        }
    }

    onRegisterBtnHandler = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChange={(val) => this.setState({ login: val })}
                />
                <TextInput
                    onChange={(val) => this.setState({ pass: val })}
                    textContentType={'password'}
                />
                <TextInput
                    onChange={(val) => this.setState({ confirm: val })}
                    textContentType={'password'}
                />
                <Button
                    onPress={this.onRegisterBtnHandler}
                    title='Register' />
            </View>
        );
    }
}

export default Register;