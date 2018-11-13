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

  /**
   * Send request to server
   * @async
   * @param url API url
   * @param data data to send
   * @returns Parsed response from server
   * @throws Error with error message if response contains error code
   */
  postData = async (url = '', data = {}) => {
    const token = await AsyncStorage.getItem(config.cookiesPath.user.token);

    return fetch(urlRoot + url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': 'JWT ' + (token) ? JSON.parse(token) : '111'
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

  /**
   * Check response from server for errors
   * @param response Response from server
   * @returns Error description or false if no error
   */
  checkErrors = (response) => {
    if (this.errors['e' + JSON.parse(response.status)]) {
      return this.errors['e' + JSON.parse(response.status)];
    }
    return false;
  }

  /**
   * Store data in storage
   * @async
   * @param path Path to data from config.cookiesPathes
   * @param cookie Data to storage
   * @param onError Callback on error
   */
  setStorage = async (path, cookie, onError) => {
    try {
      await AsyncStorage.setItem(path, cookie);
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

  /**
   * Get data from storage
   * @async
   * @param path Path to data
   * @param onError Callback on error
   * @returns Data from storage
   */
  getStorage = (path, onError) => {
    var value;
    try {
      const tmp = async () => {
        return await AsyncStorage.getItem(path).then(val => {
          value = val;
          console.warn('Val ' + val);
        });
      }

      return value;
    } catch (error) {
      console.log("Error retrieving data" + error);

      onError(error);
    }
  }

  /**
   * Delete all data from storage
   * @async
   */
  clearStorage = async () => {
    return await AsyncStorage.clear();
  }
}

export default API;