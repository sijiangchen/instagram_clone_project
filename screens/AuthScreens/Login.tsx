import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput,Dimensions, Image } from 'react-native';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { useRef } from 'react';
import {updateEmail, updatePassword} from '../../actions/user'

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width
class Login extends React.Component {

  render(){
    return (
      <View style={{flex: 1,alignItems: 'center'}}>
        <Image source={require('../../assets/backgrounds/back3.jpg')} style={{position:'absolute',zIndex:-1, width:screenWidth,height:screenHeight+50}}></Image>
        <Text style={{fontSize:35,fontFamily:'logo-font', marginVertical:60}}>Instagram</Text>
        <View style={{marginTop:100}}>
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
        </View>
        <View style={{width:screenWidth,marginTop:15,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{width:screenWidth*0.6,height:50,borderRadius:30,backgroundColor:'#0095f6',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:20}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center',flexDirection:'row',marginTop:10}}
        onPress={()=> this.props.navigation.navigate('Signup')}>
          <Text style={{fontSize:18}}>Don't have an account?</Text>
          <Text style={{fontSize:18,fontWeight:'bold',color:'#0095f6'}}>Signup!</Text>
        </TouchableOpacity>
        
        <View style={{position:'absolute',top:250,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:18}}>from</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Sijiang Chen</Text>
        </View>
        </View>
    
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({updateEmail, updatePassword},dispatch)
}
const mapStateToProps = (state) =>{
  return{
     user:state.user
     
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Login)