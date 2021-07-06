import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'

import { updateDescription } from "../../../actions/post";
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

class PostCheckout extends React.Component {

    render(){
        return (
            <View style={{flex:1, backgroundColor:'white',  alignItems:'center'}}>
                <Image source={require('../../../assets/backgrounds/ins_background.jpeg')} style={{position:'absolute',zIndex:-1, width:screenWidth,height:screenHeight+50,opacity:0.5}}></Image>
                {/* <Text style={{fontSize:35, fontFamily:'logo-font', marginVertical:60, color:'#0095f6'}}>PostCheckout</Text> */}
                <TextInput 
            style={{backgroundColor:'rgba(0,0,0,0.05)',height:50, width:'95%',color:'black', fontsize:20, paddingHorizontal:20, margin:20, borderRadius:10}}
            placeholderTextColor ={'grey'}
            placeholder={'Type in your description here:'}
            onChangeText={input=>this.props.updateDescription(input)}
            value ={this.props.post.description}
            />
            {/* alert(this.props.post.description) */}
            <View>
             <ScrollView
             horizontal={true}
             pagingEnabled={true}>
                 
                    {
                        this.props.post.photos?.map(e =>
                       
                            <Image source={{uri:e}} style={{width:screenWidth,height:360,}}/>
                       
                         )
                    }
             </ScrollView>
            </View>
            </View>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateDescription}, dispatch)
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(PostCheckout)