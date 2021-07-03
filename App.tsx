import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import SwitchNavigator from './navigation/LoginNavigator'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/index'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'


const middleware= applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default class App extends React.Component {

  render(){
    const number=12
    return (
      <Provider store={store}>
        <SwitchNavigator/>
      </Provider>
        
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
