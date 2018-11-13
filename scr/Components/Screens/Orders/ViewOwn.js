import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../Screen';
import Button from '../../Button';
import styles from '../../../config';

import Order from './Order';

// Helpers
import CRMOrder from '../../../helpers/Api/CRMOrder';
import User from '../../../helpers/Api/User';

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

    onExitHandler = () => {
        User.exit();
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

                <Button title={'Выход'} onPress={this.onExitHandler} />

            </View>
        );
    }
}

export default ViewOwn;