import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Screen from '../Screen';
import Button from '../../Button';
import styles from '../../../config';

class AddEdit extends Screen {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Add and edit screen</Text>

                <Button onPress={this.goBack} />
            </View>
        );
    }
}

export default AddEdit;