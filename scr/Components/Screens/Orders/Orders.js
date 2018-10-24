import React from 'react';
import { View, ListView } from 'react-native';
import Screen from '../Screen';
import styles from '../../../config';
import OrderListRow from './OrdersListRow';

class Orders extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            orders: {},
            employeeId: {}
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.orders}
                    renderRow={(row) => <OrderListRow name={row} />} />
            </View>
        );
    }
}

export default Orders;