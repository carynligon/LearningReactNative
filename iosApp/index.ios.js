import React, { Component } from 'react';
import { AppRegistry, StyleSheet, NavigatorIOS } from 'react-native';
import { Todo } from './src/app/Todo';
import { NewPage } from './src/app/NewPage';

const firstRoute = {
  name: 'Welcome!',
  component: Todo
};

const Main = React.createClass({
  getInitialState() {
    return {navigationBarHidden: false}
  },

  toggleNavBar() {
    this.setState({navigationBarHidden: !this.state.navigationBarHidden});
  },

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Todo,
          title: 'My Initial Scene',
          passProps: {
            toggleNavBar: this.toggleNavBar
          }
        }}
        style={{flex: 1}}
      />
    )
  }
});

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
