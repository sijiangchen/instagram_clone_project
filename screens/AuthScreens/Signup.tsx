import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Signup extends React.Component {

  render(){
    const number=12
    return (
      <View style={styles.container}>
        <Text> Signup page</Text>
      </View>
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
