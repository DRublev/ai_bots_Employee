import React from 'react';
import { Text } from 'react-native';

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

export default OrdersListRow;