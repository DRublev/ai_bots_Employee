import API from './API.js';
var config = require('../../config.js');

class Webhook extends API {
    constructor(url) {
        super();

        this.sendMesasge = (data, onSuccess, onError) => {

        }
    }
}

export default new Webhook(config.backendUrl);