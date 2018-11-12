import React from 'react';
import { View, Text } from 'react-native';
import Screen from './Screen';
import Button from '../Button';
import styles from '../../config';

class ViewOwnPosition extends Screen {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>View own position screen</Text>

                <Button onPress={this.goBack()} />
            </View>
        );
    }
}

export default ViewOwnPosition;