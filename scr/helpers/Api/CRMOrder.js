import API from './API.js';

const config = require('../../config.js');

const route = 'crmorder';

/**
 * Helper for API http://serverUrl/crmorder/
 */
class CRMOrder extends API {
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
                    console.warn('CRMOrder#list', error.message);

                    onError(error);
                });
        },
            /**
             * For root crmorder/add
             * @param data Order to add. Must contains { name, time, contacts, service, user (only if admin) } 
             * @param onSuccess Callback on successfull adding
             * @param onError Callback on error
             */
            this.add = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/add';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('CRMOrder#add', error.message);

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
                        console.warn('CRMOrder#edit', error.message);

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
                        console.warn('CRMOrder#delete', error.message);

                        onError(error);
                    });
            }
    }
}

export default new CRMOrder(config.backendUrl);