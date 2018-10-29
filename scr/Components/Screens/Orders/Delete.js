import React from 'react';
import { View, TextInput } from 'react-native';
import Screen from './Screen';
import Button from '../Button';
import styles from '../../config';

class Delete extends Screen {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Delete screen</Text>
                
                <Button onPress={this.goBack()} />
            </View>
        );
    }
}

export default Delete;