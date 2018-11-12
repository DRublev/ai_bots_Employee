import React from 'react';
import { View, Text } from 'react-native';
import Screen from '../Screen';
import Button from '../../Button';
import styles from '../../../config';

import CRMOrder from '../../../helpers/Api/CRMOrder';

class Order extends Screen {
    constructor(props) {
        super(props);

        this.state = {
            order: props.order
        };

        /*this.onEditHandler = this.onEditHandler(this.bind);
        this.onDeleteHandler = this.onDeleteHandler(this.bind);*/
    }

    onEditHandler = (toEdit) => {

    }

    onDeleteHandler = (toDelete) => {

    }

    render() {
        const { order } = this.state;
        return (
            <View style={styles.horizontalFlex}>
                <Text>{order.name}</Text>

                <Button title={'Edit'} onPress={this.onEditHandler} />
                <Button title={'Delete'} onPress={this.onDeleteHandler} />
            </View>
        );
    }
}

export default Order;