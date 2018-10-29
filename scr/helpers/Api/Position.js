import API from './API.js';

var config = require('../../config.js');

const route = 'position';

class Position extends API {
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
                    console.warn('Position#list', error.message);

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
                        console.warn('Position#add', error.message);

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
                        console.warn('Position#edit', error.message);

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
                        console.warn('Position#delete', error.message);

                        onError(error);
                    });
            }
    }
}

export default new Position(config.backendUrl);