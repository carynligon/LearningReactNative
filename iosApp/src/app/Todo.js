import $ from 'jquery';
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import NewPage from './NewPage';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['something','something again'],
      email: '',
      name: '',
      username: '',
      password: '',
      newTodo: ''
    }

  }

  handleEmail(text) {
    this.setState({email: text});
  }

  handleName(text) {
    this.setState({name: text});
  }

  handleUsername(text) {
    this.setState({username: text});
  }

  handlePassword(text) {
    this.setState({password: text});
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      email: '',
      name: '',
      username: '',
      password: '',
    });
    // fetch('https://api.backendless.com/v1/users/register', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'application-id': '7E91E4C7-28A3-DDB4-FFDD-0D627754FD00',
  	// 		'secret-key': 'FDAE28E3-874B-FF1A-FF3A-207B2F4BE000',
  	// 		'application-type': 'REST'
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     name: this.state.name,
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    // });
    this.props.toggleNavBar();
    this.props.navigator.push({
      title: "Second Page",
      component: NewPage,
      passProps: {
        toggleNavBar: this.props.toggleNavBar,
      }
    });
  }

  render() {
    console.warn(NewPage)
    return (
      <View style={styles.container}>
        <Text>email</Text>
        <TextInput
          className="email"
          ref="email"
          style={styles.textBox}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="email"
          onChangeText={this.handleEmail.bind(this)}
        />
        <Text>name</Text>
        <TextInput
          className="name"
          ref="name"
          style={styles.textBox}
          autoCapitalize="words"
          autoCorrect={false}
          accessibilityLabel="name"
          onChangeText={this.handleName.bind(this)}
        />
        <Text>username</Text>
        <TextInput
          className="username"
          ref="username"
          style={styles.textBox}
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="username"
          onChangeText={this.handleUsername.bind(this)}
        />
        <Text>password</Text>
        <TextInput
          className="password"
          ref="password"
          style={styles.textBox}
          secureTextEntry={true}
          accessibilityLabel="password"
          onChangeText={this.handlePassword.bind(this)}
        />
        <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
          <Text>add</Text>
        </TouchableOpacity>
      </View>
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
