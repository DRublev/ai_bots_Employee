import React from 'react';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import Screen from '../Screen';
import styles from '../../../config';

import NotificationsIOS, { NotificationsAndroid } from 'react-native-notifications';

import Order from './Order';

// Helpers
import CRMOrder from '../../../helpers/Api/CRMOrder';
import User from '../../../helpers/Api/User';


var PushNotification = require('react-native-push-notification');

class ViewOwn extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    }

    componentWillMount = () => {
        CRMOrder.list({}, (response) => {
            this.setState({
                orders: response.data.crm_orders
            });
        }, (error) => {
            this.alert(error.message);
        });

        PushNotification.onRegister = () => {
            console.warn('onRegister');
        }

        NotificationsAndroid.setRegistrationTokenUpdateListener(() => {
            console.warn('called');
        })
        NotificationsAndroid.refreshToken();
    }

    onExitHandler = () => {
        User.exit(() => {
            this.alert('You have been successfully logged out');
            this.navigate('AuthLoading');
        });
    }

    onOrderPressHandler = (order) => {
        this.alert(order.name);
    }

    render() {
        var { orders } = this.state;
        return (
            <View style={styles.greyContainer}>
                <Text style={styles.titleText}>{'Список заявок'}</Text>
                <SectionList
                    sections={[
                        { title: 'D', data: orders, key: 0 },
                        { title: 'J', data: orders, key: 1 },
                    ]}
                    renderItem={
                        ({ item, section }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        this.navigate('Order', { order: item });
                                    }}>
                                    <Text>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>

                            );
                        }
                    }
                    renderSectionHeader={
                        ({ section, i }) =>
                            <Text style={styles.sectionHeader}>
                                {section.title}
                            </Text>
                    }
                    keyExtractor={(item, index) => index} />
            </View>
        );
    }
}

export default ViewOwn;