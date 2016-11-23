import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

class NewPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View><Text>Hi</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textBox: {
    backgroundColor: '#FFF',
    height: 30,
    margin: 15,
    padding: 5,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#34edcc',
    marginTop: 5,
    padding: 5
  },
  viewStyles: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default NewPage;
