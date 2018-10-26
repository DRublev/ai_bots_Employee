import React from 'react';
import { AsyncStorage } from 'react-native';

var config = require('../../config.js');

const urlRoot = config.backendUrl;

class API extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  postData = async (url = '', data = {}) => {
    const token = await AsyncStorage.getItem('key');

    // Default options are marked with *
    return fetch(urlRoot + url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': 'JWT ' + token
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(response => {
      return response.json();
    }).catch((error) => {
      console.warn('API error: ' + error.message);
    }); // parses response to JSON
  }

  setStorage = async (cookie, onError) => {
    try {
      await AsyncStorage.setItem('key', cookie);
    } catch (error) {
      console.warn("Error saving data" + error);
    }
  }

  getStorage = async (path, onError) => {
    try {
      const value = await AsyncStorage.getItem('key');

      this.setState({
        key: value
      });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  clearStorage = async (onError) => {
    return await AsyncStorage.clear();
  }
}

export default API;