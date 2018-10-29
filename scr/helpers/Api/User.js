import API from './API.js';

var config = require('../../config.js');

const route = 'user';

class User extends API {
    constructor(url) {
        super();

        this.session = (data, onSuccess, onError) => {
            data = data || {};
            const request = route + '/session';

            this.postData(
                request,
                {
                    email: data.email || '',
                    password: data.password || ''
                })
                .then((response) => {
                    const token = JSON.stringify(response.data.auth);

                    this.setStorage(config.cookiesPath.user.token, token, (error) => {
                        console.warn('User#session postData->setStorage ', error.message);
                    });

                    onSuccess(response.data);
                })
                .catch((error) => {
                    console.warn('User#session', error.message);

                    onError(error);
                });

        },
            this.request = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/request';

                this.postData(
                    request,
                    {
                        email: data.email || ''
                    })
                    .then((response => {
                        onSuccess(response);
                    }))
                    .catch((error) => {
                        console.warn('User#request', error.message);

                        onError(error);
                    });
            },
            this.restore = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/restore';

                this.postData(
                    request,
                    {
                        password: data.password,
                        code: data.code
                    })
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#restore'.error.message);
                    });
            },
            this.register = (data, onSuccess, onError) => {
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
                data = data || {};
                const request = route + '/me';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#me', error.message);

                        onError(error);
                    })
            },
            this.edit = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/edit';

                this.postData(
                    request,
                    {
                        password: data.password,
                        name: data.name,
                        surname: data.surname
                    })
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#edit', error.message);
                    });
            },
            this.list = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/list';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#list', error.message);
                    });
            },
            this.lock = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/lock';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#lock', error.message);

                        onError(error);
                    });
            },
            this.unlock = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/unlock';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('Useer#unlock', error.message);
                    });
            },
            this.email = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/email';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#email', error.message);
                    });
            },
            this.password = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/password';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#password', error.message);
                    });
            },
            this.view = (data, onSuccess, onError) => {
                data = data || {};
                const request = route + '/view';

                this.postData(request, data)
                    .then((response) => {
                        onSuccess(response);
                    })
                    .catch((error) => {
                        console.warn('User#view', error.message);
                    });
            }
    }
}

export default new User(config.backendUrl);