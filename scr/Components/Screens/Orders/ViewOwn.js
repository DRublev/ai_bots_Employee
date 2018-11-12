import React from 'react';
import { View, Text, ListView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Screen from '../Screen';
import BottomNavigation from '../../BottomNavigation';
import Button from '../../Button';
import styles from '../../../config';

// Helpers
import CRMOrder from '../../../helpers/Api/CRMOrder';

import Order from './Order';

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
            //this.alert(error.message);
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

                <List>
                    {
                        orders &&
                        orders.map((order, key) => {
                            return (
                                <ListItem key={key} title={order.name}
                                    leftIcon={<Icon name="speaker_notes" size={30} color="#900" />}
                                    onPress={() => this.onOrderPressHandler(order)} />
                            );
                        })

                    }
                </List>

                <Button titile={'Добавить'} onPress={this.onAddHandler} />

                <BottomNavigation />
            </View>
        );
    }
}

export default ViewOwn;