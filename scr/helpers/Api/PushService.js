import { Platform, DeviceEventEmitter } from 'react-native';
import NotificationsIOS, { NotificationsAndroid } from 'react-native-notifications';
import PushNotificationAndroid from 'react-native-push-notification';

import API from './API.js';

var PushNotification = require('react-native-push-notification');

const config = require('../../config.js');
const route = 'phone';

/*
PushNotification.configure({
    onRegister: function (token) {
        console.warn(token);
    },
    onNotification: function (notification) {
        console.warn('NOTIFICATION:', notification);

        // process the notification
    },
    senderID: "AAAAkJkGh1E:APA91bGRJK439NW3l3Mlqmyv_8VsrMdYGat9cdUbFSggHqq725RKWIpRXuh-0xjUObochJZ95yIW1dVIfEDIgidulriuUYBxUuV7yVxD6g6j9KbKLN-wuWvaRO8--qQrXTcA6Jnza9qv",
});*/

class PushService extends API {
    constructor(url) {
        super();

        this.check();

        /**
         * Register device as push-notifications reciever
         */
        this.registerListener = () => {
            addListeners();
        }
    }

    componentWillMount() {
        /*PushNotificationAndroid.registerNotificationActions(['Accept', 'Reject', 'Yes', 'No']);*/
        DeviceEventEmitter.addListener('notificationActionReceived', function (action) {
            console.warn('Notification action received: ' + action);
            const info = JSON.parse(action.dataJSON);
            if (info.action == 'Accept') {
                // Do work pertaining to Accept action here
            } else if (info.action == 'Reject') {
                // Do work pertaining to Reject action here
            }
            // Add all the required actions handlers
        });
    }

    check = () => {
        console.warn(PushNotification);
    }

    addListeners = () => {
        if (Platform.OS === 'ios') {
            NotificationsIOS.addEventListener(
                'remoteNotificationsRegistered',
                this.onRegisterListener
            );
            NotificationsIOS.addEventListener(
                'remoteNotificationsRegistrationFailed',
                this.onRegisterListenerFailed
            );
            NotificationsIOS.reqestPermissions();
        }
        else if (Platform.OS === 'android') {
            NotificationsAndroid.refreshToken();

            NotificationsAndroid.setRegistrationTokenUpdateListener((deviceToken) => this.onRegisterListener(devicaToken));

            // On Android, we allow for only one (global) listener per each event type.
            NotificationsAndroid.setNotificationReceivedListener((notification) => this.onNotificationRecieved(notification));

            NotificationsAndroid.setNotificationOpenedListener((notification) => this.onNotificationOpened(notification));
        }
    }

    onRegisterListener = (token) => {
        console.warn('PushService#onRegisterListener', token);

        const request = route + '/enable';
        const data = {
            device: token
        };

        this.postData(request, data).then((response) => {
            console.warn('Push-notifications reciever has been successfully registered', response);
        }).catch((error) => {
            console.warn('PushService#onRegisterListener', error);
        })
    }

    onRegisterListenerFailed = (error) => {
        console.warn('PushService#onRegisterListenerFailed', error);
    }

    onNotificationRecieved = (notification) => {
        console.warn(`Notification received on device ${notification.getData()}`);
    }

    onNotificationOpened = (notification) => {
        console.warn(`Notification opened by device user ${notification.getData()}`);
    }
}

export default new PushService(config.backendUrl);