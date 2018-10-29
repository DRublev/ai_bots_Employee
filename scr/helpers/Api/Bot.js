import API from './API.js';
import { AsyncStorage } from 'react-native';

var config = require('../../config.js');

const route = 'bot';

class Bot extends API {
    constructor(url) {
        super();

        this.list = (data, onSuccess, onError) => {
            data = data || {};
            const request = route + '/list';

            this.postData(request, data)
                .then((response) => {
                    onSuccess(response);
                })
                .catch((error) => {
                    console.warn('Bot#list', error.message);

                    onError(error);
                });
        },
            this.add = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/add';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('Bot#add', error.message);

                        onError(error);
                    });
            },
            this.edit = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/edit';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error => {
                        console.warn('Bot#edit', error.message);

                        onError(error);
                    }));
            },
            this.delete = (data, onSuccess, onError) => {
                data = data || {};
                const requset = route + '/delete';

                this.postData(requset, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('Bot#delete', error.message);

                        onError(error);
                    });
            }
    }
}

export default new Bot(config.backendUrl);