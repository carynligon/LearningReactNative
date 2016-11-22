import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { Todo } from './src/app/Todo';
import TabView from 'react-native-scrollable-tab-view';

const Main = () => (
  <TabView>
    <Todo tabLabel="signup"/>
    <View tabLabel="other"></View>
  </TabView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iosApp', () => Main);
