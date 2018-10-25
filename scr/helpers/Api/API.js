import { AsyncStorage } from 'react-native';

var config = require('../../config.js');

const urlRoot = config.backendUrl;

class API {
  constructor() {

  }

  postData(url = '', data = {}) {
    // Default options are marked with *
    return fetch(urlRoot + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => {
      return response.json();
    }).catch((error) => {
      console.warn('API error');
    }); // parses response to JSON
  }

  setCoockie(path, coockie, onError) {
    try {
      AsyncStorage.setItem(path, coockie);
    }
    catch (error) {
      onError(error);
    }
  }

  getCoockie(path, onError) {
    try {
      const value = AsyncStorage.getItem(path);

      if (value !== null) {
        return value;
      }
      else {
        onError();
      }
    }
    catch (error) {
      onError(error);
    }
  }

  clearCoockie(onError) {
    AsyncStorage.clear((error) => onError(error));
  }
}

export default API;