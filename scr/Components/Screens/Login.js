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
            pass: 'admin@admin.ru',
            btnText: 'Вход'
        }
    }

    componentWillMount = () => {
        if (User.isAuthed()) {
            console.warn('User authed');
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
            this.navigate('ViewOwn');
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

    onFillDb = () => {
        // add some services
        const services = [
            {
                name: 'Service 0',
                description: 'Some text',
                price: 1000
            },
            {
                name: 'Service 1',
                description: 'Some text',
                price: 1100
            },
            {
                name: 'Service 2',
                description: 'Some text',
                price: 1200
            },
            {
                name: 'Service 3',
                description: 'Some text',
                price: 1300
            },
            {
                name: 'Service 4',
                description: 'Some text',
                price: 1400
            }
        ];

        services.forEach(service => {
            Service.add(service,
                () => { console.warn('Service has been successfully added'); },
                (error) => { console.warn('Error adding a service'); })
        });

        // add some crmorders
        const crmOrders = [
            {
                name: 'Order #1',
                time: Date.now(),
                contacts: '+79187569368',
                service: '5bdd4e108aed98019c9f121c',
                employee: '5bd97e37306c720f948ff5ae',
                user: '5bd97e37306c720f948ff5ae'
            },
            {
                name: 'Order #2',
                time: Date.now(),
                contacts: '+79187569368',
                service: '5bdd4e108aed98019c9f121d',
                employee: '5bd97e37306c720f948ff5ae',
                user: '5bd97e37306c720f948ff5ae'
            },
            {
                name: 'Order #3',
                time: Date.now(),
                contacts: '+79187569368',
                service: '5bdd4e108aed98019c9f121c',
                employee: '5bd97e37306c720f948ff5ae',
                user: '5bd97e37306c720f948ff5ae'
            },
            {
                name: 'Order #0',
                time: Date.now(),
                contacts: '+79187569368',
                service: '5bdd4e108aed98019c9f121f',
                employee: '5bd97e37306c720f948ff5ae',
                user: '5bd97e37306c720f948ff5ae'
            }
        ];

        /*crmOrders.forEach(order => {
            CRMOrder.add(order,
                () => console.warn('Order has been successfully added'),
                () => console.warn('Error adding an order'));
        });*/
        // add some categories
        // add some bots
        // add some positions
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

                <Button title={this.state.btnText} onPress={this.onLoginHandler} />
                <Button title={'Регистрация'} onPress={this.onRegisterHandler} />

                
            </View>
        );
    }
}

export default Login;