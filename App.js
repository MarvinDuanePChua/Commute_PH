/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Login from './src/screens/Login';

const RootStack = StackNavigator({
  Login: {
    screen: Login
  }
}, {initialRouteName: 'Login'});

export default class App extends Component<{}> {
  render() {
    return (<RootStack/>);
  }
}
