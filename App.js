/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Login from './src/screens/Login';
import * as color from './src/values/Colors';
const RootStack = StackNavigator({
  Login: {
    screen: Login
  }
}, {
  initialRouteName: 'Login',
  headerMode: 'screen',
  navigationOptions: {
    headerStyle: {
      backgroundColor: color.TOOLBAR
    },
    headerTintColor: color.TOOLBAR_TINT
  }
});

export default class App extends Component < {} > {
  render() {
    return (<RootStack/>);
  }
}
