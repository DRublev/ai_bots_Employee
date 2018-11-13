import React from 'react';
import { StyleSheet } from 'react-native';

/**
 * Styles for UI elements
 */
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
    },
    horizontalFlex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    navItem: {
        padding: 10
    }
});

/**
 * Pathes for AsyncStorage
 */
export const cookiesPath = {
    user: {
        token: 'user/token',
        type: 'user/type',
    }
}

/**
 * Backend URL
 * Must ends with /
 */
export const backendUrl = 'http://192.168.1.2:4800/';

export default styles;