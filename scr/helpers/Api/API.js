import React from 'react';
import { AsyncStorage } from 'react-native';

var config = require('../../config.js');

const urlRoot = config.backendUrl;

class API extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.errors = {
      e403: 'Forbidden',
      e404: 'Not found',
      e901: 'Authentication is over',
      e902: 'Required fields are not provided',
      e903: 'Data is used',
      e904: 'One or more fields have incorrect data',
      e905: 'Email-password pair is not exist or you are not confirmed your account',
      e906: 'Data is not found',
      e907: 'Email is incorrect',
      e908: 'Password is incorrect'
    };
  }

  postData = async (url = '', data = {}) => {
    const token = await AsyncStorage.getItem(config.cookiesPath.user.token) || '';

    return fetch(urlRoot + url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': 'JWT ' + JSON.parse(token)
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    }).then(response => {
      if (this.checkErrors(response)) {
        throw new Error(this.checkErrors(response));
      }
      else {
        return response.json();
      }
    }).catch((error) => {
      console.warn('API error: ' + error.message);

      throw new Error(error.message);
    });
  }

  checkErrors = (response) => {
    var body = response._bodyInit;
    if (this.errors['e' + JSON.parse(body).status]) {
      return this.errors['e' + JSON.parse(body).status];
    }
    return false;
  }

  setStorage = async (path, cookie, onError) => {
    try {
      await AsyncStorage.setItem(path, cookie);
      console.warn('API#setStorage with content: ' + cookie, path);
    } catch (error) {
      console.warn("Error saving data " + error);

      onError(error);
    }
  }

  multiSetStorage = async (pathes, cookies, onError) => {
    var pathesCookies;
    for (var i; i < pathes.length(); i++) {
      pathesCookies[i] = [pathes[i], cookies[i]];
    }

    try {
      await AsyncStorage.multiSet(pathesCookies, (error) => {
        onError(error);
      });
    }
    catch (error) {
      onError(error);
    }
  }

  getStorage = async (path, onError) => {
    try {
      const value = await AsyncStorage.getItem(path);

      /*this.setState({
        key: value
      });*/

      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);

      onError(error);
    }
  }

  clearStorage = async (onError) => {
    return await AsyncStorage.clear();
  }
}

export default API;