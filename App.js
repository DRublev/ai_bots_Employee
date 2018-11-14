import React, { Component } from 'react';

import PushService from './scr/helpers/Api/PushService';
import Navigator from './scr/Components/Navigator';

export default class App extends Component {
  constructor() {
    super();

    PushService.addListeners(this);
  }

  render() {
    return (
      <Navigator />
    );
  }
}