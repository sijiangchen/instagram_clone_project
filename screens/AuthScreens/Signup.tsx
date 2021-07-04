import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput,Dimensions, Image } from 'react-native';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { useRef } from 'react';
import {updateEmail, updatePassword, updateUsername,signup} from '../../actions/user'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

class Signup extends React.Component {
  state ={
    repeat:'',
  }
  onSignupPress =() =>{
    if (this.props.user.password == this.state.repeat && this.props.user.username != ''){
      this.props.signup()
    }
    else{
      alert('the passcode are different')
    }
    
  }
  render(){
    return (
      <View style={{flex: 1,alignItems: 'center'}}>
        <Image source={require('../../assets/backgrounds/back3.jpg')} style={{position:'absolute',zIndex:-1, width:screenWidth,height:screenHeight+50}}></Image>
        <View style={{width:screenWidth*0.9, height:15,marginTop:10}}>
          <Text style={{left:15}}>Username</Text>
        </View>
        <TextInput 
        style={{height:50, width:screenWidth*0.9,color:'black', paddingHorizontal:20, margin:5, borderRadius:10, borderWidth:1}}
        placeholderTextColor ={'grey'}
        placeholder={'your username'}
        onChangeText={input=>this.props.updateUsername(input)}
        value ={this.props.user.username}
        />
        <View style={{width:screenWidth*0.9, height:15,marginTop:10}}>
          <Text style={{left:15}}>Email</Text>
        </View>
        <TextInput 
        style={{height:50, width:screenWidth*0.9,color:'black', paddingHorizontal:20, margin:5, borderRadius:10, borderWidth:1}}
        placeholderTextColor ={'grey'}
        placeholder={'example@example.com'}
        onChangeText={input=>this.props.updateEmail(input)}
        value ={this.props.user.email}
        />
        <View style={{width:screenWidth*0.9, height:15,marginTop:10}}>
          <Text style={{left:15}}>Password</Text>
        </View>
        <TextInput 
        style={{height:50, width:screenWidth*0.9,color:'black', paddingHorizontal:20, margin:5, borderRadius:10, borderWidth:1}}
        placeholderTextColor ={'grey'}
        placeholder={'Passwcode123'}
        onChangeText={input=>this.props.updatePassword(input)}
        value ={this.props.user.password}
        secureTextEntry={true}
        />
        <View style={{width:screenWidth*0.9, height:15,marginTop:10}}>
          <Text style={{left:15}}>Repeat Password</Text>
        </View>
        <TextInput 
        style={{height:50, width:screenWidth*0.9,color:'black', paddingHorizontal:20, margin:5, borderRadius:10, borderWidth:1}}
        placeholderTextColor ={'grey'}
        placeholder={'Passwcode123'}
        onChangeText={input=>this.setState({repeat:input})}
        value ={this.state.repeat}
        secureTextEntry={true}
        />
        <TouchableOpacity style={{width:screenWidth*0.6,height:50,borderRadius:30,backgroundColor:'#0095f6',justifyContent:'center',alignItems:'center',margin:30}}
        onPress={()=>this.onSignupPress()}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>SIGNUP</Text>
        </TouchableOpacity>
        </View>
       
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({updateEmail, updatePassword,updateUsername,signup},dispatch)
}
const mapStateToProps = (state) =>{
  return{
     user:state.user
     
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Signup)