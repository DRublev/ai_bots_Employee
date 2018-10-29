import API from './API.js';
import { AsyncStorage } from 'react-native';

var config = require('../../config.js');

const route = 'user';

class User extends API {
    constructor(url) {
        super();

        this.session = (data, onSuccess, onError) => {
            data = data || {};
            var request = route + '/session';

            this.postData(request,
                {
                    email: data.email || '',
                    password: data.password || ''
                })
                .then((response) => {
                    var token = JSON.stringify(response.data.auth);
                    var type = JSON.stringify(response.data.usertype);

                    this.setStorage(config.cookiesPath.user.token, token, (error) => {
                        console.warn('User#session postData->setStorage ', error.message);
                    });
                    /*this.setStorage(config.cookiesPath.user.type, type, (error) => {
                        console.warn('User#session postData->setStorage ', error.message);
                    });*/

                    onSuccess(response.data);
                })
                .catch((error) => {
                    console.warn('User#session', error.message);

                    onError(error);
                });

        },
            this.request = (data, onSuccess, onError) => {

            },
            this.restore = (data, onSuccess, onError) => {

            },
            this.register = async (data, onSuccess, onError) => {
                data = data || {};
                request = route + '/register';

                this.postData(request,
                    {
                        email: data.email || '',
                        password: data.password || '',
                        usertype: data.usertype || '',
                        name: data.name || '',
                        surname: data.surname || ''
                    })
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        onError(error);
                    });
            },
            this.me = (data, onSuccess, onError) => {

                this.postData({})
            },
            this.edit = (data, onSuccess, onError) => {

            },
            this.list = (data, onSuccess, onError) => {

            },
            this.lock = (data, onSuccess, onError) => {

            },
            this.unlock = (data, onSuccess, onError) => {

            },
            this.email = (data, onSuccess, onError) => {

            },
            this.password = (data, onSuccess, onError) => {

            },
            this.view = (data, onSuccess, onError) => {

            }
    }
}

export default new User(config.backendUrl);