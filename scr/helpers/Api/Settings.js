import API from './API.js';

var config = require('../../config.js');

const route = 'settings';

class Settings extends API {
    constructor(url) {
        super();

        this.get = (data, onSuccess, onError) => {
            data = data || {};
            const request = route + '/get';

            this.postData(request, data)
                .then((response) => {
                    onSuccess(response);
                })
                .catch((error) => {
                    console.warn('Settings#get', error.message);

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
                    .catch((error) => {
                        console.warn('Settings#edit', error.message);

                        onError(error);
                    });
            }
    }
}

export default new Settings(config.backendUrl);