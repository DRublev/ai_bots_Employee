import API from './API.js';
var config = require('../../config.js');

const route = 'user';

class User extends API {
    constructor(url) {
        super();

        this.session = (data, onSuccess, onError) => { // TODO: Works
            data = data || {};
            request = route + '/session';

            super.postData(request, {
                email: data.email || '',
                password: data.password || ''
            }).then((response) => {
                onSuccess(response);
                 super.setCoockie('user/authed', )
            }).catch((error) => {
                onError(error);
            });
        },
            this.request = (data, onSuccess, onError) => { // TODO: Works

            },
            this.restore = (data, onSuccess, onError) => { // TODO: Works

            },
            this.register = (data, onSuccess, onError) => {// TODO: Works
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
            this.me = (data, onSuccess, onError) => { // TODO: Works

            },
            this.edit = (data, onSuccess, onError) => { // TODO: Works

            },
            this.list = (data, onSuccess, onError) => { // TODO: Doesn't Work

            },
            this.lock = (data, onSuccess, onError) => { // TODO: Works

            },
            this.unlock = (data, onSuccess, onError) => { // TODO: Works

            },
            this.email = (data, onSuccess, onError) => { // TODO: Works

            },
            this.password = (data, onSuccess, onError) => { // TODO: Works

            },
            this.view = (data, onSuccess, onError) => { // TODO: Works

            }
    }
}

export default new User(config.backendUrl);