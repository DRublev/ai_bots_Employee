import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../config';

/**
 * Custom button 'cause Button from react-native causes an error
 */
class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={styles.button}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;