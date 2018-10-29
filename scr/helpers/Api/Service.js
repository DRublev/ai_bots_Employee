import API from './API.js';

var config = require('../../config.js');

const route = 'service'

class Service extends API {
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
                    console.warn('Service#list', error.message);

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
                        console.warn('Service#add', error.message);

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
                        console.warn('Service#edit', error.message);

                        onError(error);
                    });
            },
            this.delete = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/delete';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('Service#delete', error.message);

                        onError(error);
                    });
            }
    }
}

export default new Service(config.backendUrl);