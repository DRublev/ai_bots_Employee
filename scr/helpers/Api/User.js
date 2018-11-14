import API from './API.js';

const config = require('../../config.js');

const route = 'user';

/**
 * Helper for API http://serverUrl/user/
 */
class User extends API {
    constructor(url) {
        super();

        /**
         * Root for user authorization
         * @param data User data. Must contaiins { email, password }
         * @returns Stores user token in storage if success
         */
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
            /**
             * Exit from account and clear token
             * @param callback Callback on done
             */
            this.exit = async (callback) => {
                await this.removeItemFromStorage(config.cookiesPath.user.token, callback);
            },
            this.getToken = async () => {
                var token = await this.getStorage(config.cookiesPath.user.token, () => {
                    console.warn('User#getToken');
                });
                return token;
            }
    }
}

export default new User(config.backendUrl);