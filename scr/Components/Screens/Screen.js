import React from 'react';
import { Alert, AppState, Platform } from 'react-native';

import { NotificationsAndroid } from 'react-native-notifications';

class Screen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navigation: this.props.navigation
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.push);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.push);
    }

    goBack = () => {
        const { goBack } = this.props.navigation;

        goBack();
    }

    navigate = (route) => {
        const { navigate } = this.props.navigation;

        navigate(route, { screen: route });
    }

    alert = (title, msg, buttons) => {
        Alert.alert(title, msg, buttons, { cancelable: false });
    }

    push = (title, msg, extra) => {
        Platform.select({
            ios: () => {
                NotificationsIOS.localNotification({
                    alertBody: msg,
                    alertTitle: title
                });
            },
            android: () => {
                NotificationsAndroid.localNotification({
                    title: title,
                    body: msg,
                    extra: extra
                });
            }
        });
    }
}

export default Screen;