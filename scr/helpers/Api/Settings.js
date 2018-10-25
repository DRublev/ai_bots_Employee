import API from './API.js';
var config = require('../../config.js');

class Settings extends API {
    constructor(url) {
        super();

        this.get = (data, onSuccess, onError) => {

        },
            this.edit = (data, onSuccess, onError) => {

            }
    }
}

export default new Settings(config.backendUrl);