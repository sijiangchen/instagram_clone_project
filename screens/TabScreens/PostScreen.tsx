import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image, SafeAreaView, Platform} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
import { uploadPhoto } from '../../actions';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

class PostScreen extends React.Component {
    state={
        url:undefined
    }
    openLibrary = async()=>{
        try{
            const { status } = await Permissions.askAsync(Permissions.CAMERA)
            if(status ==='granted'){
                const image = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing:true
                })
                if(!image.cancelled){
                    const url = await this.props.uploadPhoto(image)
                    this.setState({url:url})
                    // alert("image has been uploaded")
                }
            }
        }
        catch(error){
            alert(error)
        }

    }    
    render(){
        return (
            <SafeAreaView style={{flex:1,}}>
                <View style={(Platform.OS == 'ios')
                ?
                {width:screenWidth,height:55, borderBottomColor:'grey', borderBottomWidth:1}
                :
                {width:screenWidth,height:55, borderBottomColor:'grey', borderBottomWidth:1,marginTop:20,justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
               
                <Text style={{margin:10,fontWeight:'bold',fontSize:22}}>Create a new post</Text>
                <TouchableOpacity style={{margin:10}}>
                    <Text style={{margin:10,fontWeight:'bold',fontSize:22,color:"blue"}}>Upload</Text>
                </TouchableOpacity>
                </View>

                <View style={{width:screenWidth,height:360,}}>
                    {
                    (this.state.url == undefined)?
                    <Image source={require('../../assets/images/dog1.jpeg')} style={{width:screenWidth,height:360}} /> 
                    :
                    <Image source={{uri:this.state.url}} style={{width:screenWidth,height:360}} />     
                    }
                </View>
                <View style={{flexDirection:'row',width:screenWidth,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={{width:95,height:90,backgroundColor:'rgba(0,0,0,0.1)',justifyContent:'center',alignItems:'center',borderRadius:5}}
                    onPress={()=> this.openLibrary()}>
                        <View style={{width:40, height:40, borderRadius:20,backgroundColor:'rgba(0,0,0,0.1)',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:24}}>+</Text>
                        </View>

                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser,uploadPhoto}, dispatch)
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(PostScreen)