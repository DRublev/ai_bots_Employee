import React from 'react';
import {
    View,
    TextInput,
    Text,
    ImageBackground,
    Image
} from 'react-native';
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
            errors: {
                pass: '',
                login: ''
            }
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
                errors: {
                    pass: 'Неверный логин или пароль'
                }
            });
        });
    }

    render() {
        var { errors } = this.state;
        return (
            <ImageBackground
                source={config.imgsPathes.blueBackground}
                style={styles.imageBackground}>
                <View
                    style={styles.container}>
                    <Image
                        source={config.imgsPathes.logo} style={styles.logo} />

                    <TextInput
                        style={styles.textInput}
                        key={'loginInput'}
                        placeholder='Логин'
                        placeholderTextColor={'#949494'}
                        onChangeText={(text) => {
                            this.setState({
                                login: text
                            });
                        }} />
                    {
                        <Text style={styles.smallText}>
                            {errors.login ? errors.login : ''}
                        </Text>
                    }

                    <TextInput
                        style={styles.textInput}
                        key={'passInput'}
                        placeholder='Пароль'
                        placeholderTextColor={'#949494'}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({
                                pass: text
                            });
                        }} />
                    {
                        <Text style={styles.smallText}>
                            {errors.pass ? errors.pass : ''}
                        </Text>
                    }

                    <Button
                        style={styles.button}
                        title={'Войти'}
                        onPress={this.onLoginHandler} />
                </View>
            </ImageBackground>
        );
    }
}

export default Login;