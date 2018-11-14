import { Platform } from 'react-native';
import { NotificationsAndroid } from 'react-native-notifications';
import NotificationsIOS from 'react-native-notifications';

import API from './API.js';

const config = require('../../config.js');

class PushService extends API {
    constructor(url) {
        super();

        /**
         * Register device as push-notifications reciever
         */
        this.onRegisterListener = (token) => {
            // Check token and send it to server
            console.warn('PushService#onRegisterListener', token);
        },
            this.onRegisterListenerFailed = (error) => {
                console.warn('PushService#onRegisterListenerFailed', error);
            },
            this.onNotificationRecieved = (notification) => {
                // Do smth
            },
            this.onNotificationOpened = (notification) => {
                // Transfer it to Navigator
            },
            this.addListeners = (caller) => {
                if (Platform.OS === 'ios') {
                    NotificationsIOS.addEventListener(
                        'remoteNotificationsRegistered',
                        this.onRegisterListener.bind(caller)
                    );
                    NotificationsIOS.addEventListener(
                        'remoteNotificationsRegistrationFailed',
                        this.onRegisterListenerFailed.bind(caller)
                    );
                    NotificationsIOS.reqestPermissions();
                }
                else if (Platform.OS === 'android') {
                    NotificationsAndroid.setRegistrationTokenUpdateListener(
                        (token) => this.onRegisterListener(token)
                    );
                }
            }
    }
}

export default new PushService(config.backendUrl);