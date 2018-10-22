import React from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput, ListView } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import Screen from './Screen';
import styles from '../../config';

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
                <ListView dataSource={this.state.orders} renderRow={(row) => <OrderListRow name={row} />} />
            </View>
        );
    }
}

export default Orders;

class OrderListRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.match.name,
        }
    }

    render() {
        return (
            <Text>{this.state.name}</Text>
        );
    }
}