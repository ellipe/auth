/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDLZtdWFffnflJ9y8zYdbHXxTXTAuSgpkQ',
      authDomain: 'auth-4de4f.firebaseapp.com',
      databaseURL: 'https://auth-4de4f.firebaseio.com',
      projectId: 'auth-4de4f',
      storageBucket: 'auth-4de4f.appspot.com',
      messagingSenderId: '284895891656'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
