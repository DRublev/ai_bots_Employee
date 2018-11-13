import React from 'react';
import { View, Text, TimePickerAndroid } from 'react-native';
import Screen from './Screen';
import Button from '../Button';
import styles from '../../config';

class ChangeWorkSchedule extends Screen {
    constructor(props) {
        super(props);
    }

    onChooseTimeHandler = async () => {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hours: true
            });

            if (action != TimePickerAndroid.dismissedAction) {
                this.alert(hour);
            }
        }
        catch ({ code, message }) {
            console.warn('ChangeWorkSchedule#onChooseTimeHandler', message);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Change work schedule screen</Text>

                <Button onPress={this.onChooseTimeHandler} title={'Выбрать время'} />

                <Button onPress={() => this.goBack} />
            </View>
        );
    }
}

export default ChangeWorkSchedule;