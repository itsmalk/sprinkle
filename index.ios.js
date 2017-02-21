import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux';
import configureStore from '@/redux';
import Nav from '@/containers/Nav';

const store = configureStore();

export default class sprinkle extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('sprinkle', () => sprinkle);
