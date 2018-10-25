import React from 'react';
import { Alert } from 'react-native';

class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navigation: this.props.navigation
        };
    }

    goBack = () => {
        const { navigation } = this.state;

        navigation.goBack();
    }

    navigate = (route) => {
        const { navigation } = this.state;

        navigation(route, { screen: route });
    }

    switchMenu = () => {

    }

    // types: ok, ok/cancel, ok/cancel/askMeLater
    alert(title, msg, buttons) {
        Alert.alert(title, msg, buttons, { cancelable: false });
    }

    //Get coockies 

    getAuthedUser = () => {

    }
}

export default Screen;