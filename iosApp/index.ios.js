/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
} from 'react-native';

export default class iosApp extends Component {
  state = {
    seeMethods: false,
    text: 'placeholder text'
  }
  onButtonPress() {
    this.setState({
      seeMethods: !this.state.seeMethods
    });
  }
  render() {
    let methods;
    if (this.state.seeMethods) {
      methods =(
        <View>
          <Text>Chemex</Text>
          <Text>Kalita</Text>
          <Text>V60</Text>
          <Text>French Press</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => {this.setState({text})}}
          value={this.state.text}
        />
        <Text style={styles.welcome}>
          Here is an app
        </Text>
        <Text style={styles.instructions}>
          It says things
        </Text>
        <Text style={styles.instructions}>
          But does nothing
        </Text>
        <Button
         onPress={this.onButtonPress.bind(this)}
         title="Press Me"
         accessibilityLabel="See an informative alert"
       />
       {methods}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#de45ca',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('iosApp', () => iosApp);
