import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput,Dimensions, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import { uploadPhoto } from "../../actions/index";
import { updatePhoto } from "../../actions/user";

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

class ProfilePicture extends React.Component {
    openLibrary=  async()=>{
        try{
            const { status } = await Permissions.askAsync(Permissions.CAMERA)
            if(status ==='granted'){
                const image = await ImagePicker.launchImageLibraryAsync({
                    // mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing:true
                })
                if(!image.cancelled){
                    const url = await this.props.uploadPhoto(image)
                    // this.setState({url:url})
                    this.props.updatePhoto(url)
                
                }
            }
        }
        catch(error){
            alert(error)
        }
    }

  render(){
    return (
      <View style={{flex: 1,alignItems: 'center',justifyContent:'center'}}>
          <Image source={require('../../assets/backgrounds/ins_background.jpeg')} style={{position:'absolute',zIndex:-1, width:screenWidth,height:screenHeight+50}}></Image>
          <View style={{justifyContent:'center',alignItems:'center',bottom:100}}>
          <Text style={{fontWeight:'bold',fontSize:24, color:'black', margin:15}}>Choose a profile picture</Text>
          {
            (this.props.user.photo  == undefined)
            ?
            <TouchableOpacity 
            onPress={()=>this.openLibrary()}>
            <View style={{width:screenWidth*0.5,height:screenWidth*0.5, borderRadius:screenWidth*0.25,backgroundColor:'#f1e8e7'}}/>
            </TouchableOpacity>
            :
            <TouchableOpacity
            onPress={()=>this.openLibrary()}>
                <Image source={{uri:this.props.user.photo}}
                style ={{width:screenWidth*0.5,height:screenWidth*0.5, borderRadius:screenWidth*0.25}}/>
            </TouchableOpacity>
          }
          <TouchableOpacity 
          style={{margin:25,padding:20, borderRadius:10,backgroundColor:"rgba(0,0,0,0.05)",width:screenWidth*0.9,alignItems:'center'}}
          onPress={()=>this.props.navigation.navigate('Signup')}>
            <Text style={{fontWeight:'bold',fontSize:24,color:'black'}}>Continue</Text>
          </TouchableOpacity>
          </View>
          
        </View>
       
    );
        }
}


const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({uploadPhoto,updatePhoto },dispatch)
}
const mapStateToProps = (state) =>{
  return{
     user:state.user
     
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(ProfilePicture)