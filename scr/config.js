import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#03dac6',
        color: '#ffffff',
        height: 50,
        margin: 10,
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15
    },
    textInput: {
        backgroundColor: '#eeeeee',
        margin: 10,
        width: 180
    },
    listView: {
        margin: 0.2
    }
});

export const cookiesPath = {
    user: {
        token: 'user/token',
        type: 'user/type',
    }
}

export const backendUrl = 'http://192.168.1.5:4800/';

export default styles;