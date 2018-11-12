import React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Screen from '../Screen';
import BottomNavigation from '../../BottomNavigation';
import Button from '../../Button';
import styles from '../../../config';

import Order from './Order';

// Helpers
import CRMOrder from '../../../helpers/Api/CRMOrder';

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
    }

    onAddHandler = () => {
        this.navigate('AddEdit');
    }

    onOrderPressHandler = (order) => {
        this.alert(order.name);
    }

    render() {
        var { orders } = this.state;
        return (
            <View style={styles.container}>
                <Text>View own orders screen</Text>

                {
                    orders &&
                    orders.map((order, key) => {
                        return (
                            <Order key={key} title={order.name}
                                order={order}
                                onPress={() => this.onOrderPressHandler(order)} />
                        );
                    })

                }

                <Button titile={'Добавить'} onPress={this.onAddHandler} />

                <BottomNavigation />
            </View>
        );
    }
}

export default ViewOwn;