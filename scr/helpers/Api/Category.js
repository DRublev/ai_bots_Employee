import API from './API.js';
var config = require('../../config.js');

class Category extends API {
    constructor(url) {
        super();

        this.list = (data, onSuccess, onError) => {

        },
            this.add = (data, onSuccess, onError) => {

            },
            this.edit = (data, onSuccess, onError) => {

            },
            this.delete = (data, onSuccess, onError) => {

            }
    }
}

export default new Category(config.backendUrl);