import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Screen from '../Screen';
import Button from '../../Button';
import styles from '../../../config';

import CRMOrder from '../../../helpers/Api/CRMOrder';
import Service from '../../../helpers/Api/Service';

class Order extends Screen {
    constructor(props) {
        super(props);
    }

    getTimeFromDateTime = (datetime) => {
        const date = new Date(datetime);

        return date.getHours() + ':' + date.getMinutes();
    }

    getDateFromDateTime = (datetime) => {
        const date = new Date(datetime);

        return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
    }

    getServiceName = (serviceId) => {
        var serviceName = '';

        Service.list({}, (data) => {
            data.map(service => {
                if (service._id === serviceId) {
                    serviceName = service.name;
                }
            })
        }, (error) => {
            console.warn('Order#getServiceName', error);
        });

        return serviceName;
    }

    render() {
        const { order } = this.props.navigation.state.params;
        console.warn(order);
        return (
            <View style={styles.greyContainer}>
                <Text style={styles.titleText}>
                    {'Информация о записи'}
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardText}>{'Имя'}</Text>
                    <Text style={styles.cardField}>
                        {order.name}
                    </Text>

                    <Text style={styles.cardText}>{'Телефон'}</Text>
                    <Text style={styles.cardField}>
                        {order.contacts}
                    </Text>

                    <Text style={styles.cardText}>{'Время записи'}</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text
                            style={{
                                ...styles.cardField,
                                width: '30%'
                            }}>
                            {this.getTimeFromDateTime(order.time)}
                        </Text>
                        <Text
                            style={{
                                ...styles.cardField,
                                width: '65%'
                            }}>
                            {this.getDateFromDateTime(order.time)}
                        </Text>
                    </View>


                    <Text style={styles.cardText}>
                        {'Название услуги'}
                    </Text>
                    <Text style={styles.cardField}>
                        {
                            order.service
                                ? this.getServiceName(order.service)
                                : order.name
                        }
                    </Text>
                </View>
            </View >
        );
    }
}

export default Order;