import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;