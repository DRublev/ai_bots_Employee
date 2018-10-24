import API from './API';

class User extends API {
    constructor(url) {
        super(url);

        this.session = (data, onSuccess, onError) => {
            data = data || {};
            request = url + 'user/session';

            super.postData('user/session',
                {
                    email: 'admin@admin.ru',
                    password: 'admin@admin.ru'
                })
                .then((response) => onSuccess(response))
                .catch(error => onError(error));
        }

        this.list = (data, onSuccess, onError) => {
            data = data || {};
            reauest = url + 'user/list';

            super.callback(request, onSuccess, onError);
        }
    }
}

export default User;