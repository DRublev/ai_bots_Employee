import React from 'react';
import { StyleSheet } from 'react-native';


const logo = require('./imgs/logo.png');
const logoInverse = require('./imgs/logo-inverse.png');
const background = require('./imgs/background-blue.png');

/**
 * Styles for UI elements
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#6973EB',
        height: 55,
        width: '100%',
        paddingTop: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingLeft: 15,
        borderRadius: 3,
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 15,
    },
    textInput: {
        backgroundColor: '#ffffff',
        borderRadius: 3,
        paddingLeft: 19,
        paddingRight: 19,
        paddingBottom: 13,
        paddingTop: 13,
        width: '100%',
        fontSize: 14,
    },
    listView: {
        margin: 0.2
    },
    navItem: {
        padding: 10
    },
    errorTextInput: {

    },
    smallText: {
        fontSize: 12,
        color: '#ffffff',
        height: 16,
        textAlign: 'left',
        alignSelf: 'flex-start',
        paddingLeft: 2,
        marginTop: 2,
        marginBottom: 2
    },
    logo: {
        width: 173,
        height: 43.4,
        marginBottom: 48
    },
    logoHeader: {
        width: 140,
        height: 30,
        marginTop: 14
    },
    header: {
        height: 58,
        backgroundColor: '#ffffff',
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    titleText: {
        fontSize: 25,
        color: '#454F63',
        textAlign: 'left',
        height: 33,
        alignSelf: 'flex-start',
        marginVertical: 20
    },
    greyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        backgroundColor: '#ECEFF0',
    },
    orderListItem: {
        backgroundColor: '#F9FCFF',
        paddingHorizontal: 17,
        paddingVertical: 6,
        color: '#454F63',
        fontSize: 16
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
    },
    card: {
        width: '100%',
        height: 'auto',
        shadowColor: 'rgba(61, 91, 99, 0.15)',
        shadowRadius: 30,
        shadowOffset: {
            width: 30,
            height: 30
        },
        shadowOpacity: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    cardField: {
        width: '100%',
        height: 45,
        borderColor: '#DEE2E4',
        borderRadius: 3,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 5,
        color: '#454F63',
        textAlignVertical: 'center'
    },
    cardText: {
        color: '#9AA4B9',
        fontSize: 16,
        marginVertical: 5
    }
});

export const imgsPathes = {
    blueBackground: background,
    logo: logo,
    logoInverse: logoInverse
}

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