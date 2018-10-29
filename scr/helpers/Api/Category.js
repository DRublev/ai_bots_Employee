import API from './API.js';

var config = require('../../config.js');

const route = 'category';

class Category extends API {
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
                    console.warn('Category#list', error.message);

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
                        console.warn('Category#add', error.message);

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
                        console.warn('Category#edit', error.message);

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
                        console.warn('Category#delete', error.message);

                        onError(error);
                    });
            }
    }
}

export default new Category(config.backendUrl);