import API from './API.js';

var config = require('../../config.js');

const rpute = 'webhook';

class Webhook extends API {
    constructor(url) {
        super();

        this.hook = (data, onSuccess, onError) => {
            data = data || {};
            const request = route + '/hook';

            this.postData(request, data)
                .then((response) => {
                    onSuccess(response);
                })
                .catch((error) => {
                    console.warn('Webhook#hook', error.message);

                    onError(error);
                });
        },
            this.sendMesasge = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/send_message';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('Webhook#sendMessage', error.message);

                        onError(error);
                    });
            }
    }
}

export default new Webhook(config.backendUrl);