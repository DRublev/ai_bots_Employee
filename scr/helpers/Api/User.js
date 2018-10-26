import API from './API.js';
var config = require('../../config.js');

const route = 'user';

class User extends API {
    constructor(url) {
        super();

        this.session = (data, onSuccess, onError) => {
            data = data || {};
            var request = route + '/session';
            var token = '';

            this.postData(request,
                {
                    email: data.email || '',
                    password: data.password || ''
                })
                .then((response) => {
                    token = JSON.stringify(response.data.auth);
                    this.setStorage(token);

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
            this.register = (data, onSuccess, onError) => {
                data = data || {};
                request = 'user/register';

                super.postData(request, {
                    email: data.email || '',
                    password: data.password || '',
                    usertype: data.usertype || '',
                    name: data.name || '',
                    surname: data.surname || ''
                }).then((response) => {
                    onSuccess(response);
                }).catch((error) => {
                    onError(error);
                });
            },
            this.me = async (data, onSuccess, onError) => {
                var res;
                const key = await this.getCoockie('@Local:authed').then((result) => { res = result });
                console.warn(res);
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