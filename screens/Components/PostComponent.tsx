import React, { Component } from 'react'
import { View, Image, Dimensions, Text, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'


const screenWidth = Dimensions.get("window").width

export default class PostComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View style={{marginBottom:10}}>
                <View style={{width:screenWidth, height:50, backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomColor:'grey', borderBottomWidth:0.07}}> 
                <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Image source={{uri:this.props.item.photo}} style={{width:40,height:40,borderRadius:20,margin:10}}/>
                    <Text style={{fontWeight:'bold', fontSize:17,}}>{this.props.item.username}</Text>
                    </View>
                    <Text style={{margin:15}}>
                        {moment(this.props.item.date).format('ll')}
                    </Text>
                </View>
                {/* <Text style={{position:'absolute',right:15, top:30,fontSize:10}}>helllo</Text> */}
                <ScrollView
             horizontal={true}
             pagingEnabled={true}>
                 
                    {
                        this.props.item.photos?.map(e =>
                       
                            <Image source={{uri:e}} style={{width:screenWidth,height:360,}}/>
                       
                         )
                    }
             </ScrollView>
               
                <View style={{width: screenWidth, flexDirection:'row',justifyContent:'space-between',height:50,alignItems:'center'}}>
                    <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                        <Image source={require('../../assets/images/like.jpg')} style={{width:20,height:20,margin:10}}/>
                        <Image source={require('../../assets/images/comment.jpg')} style={{width:20,height:20,margin:10}}/>
                        <Image source={require('../../assets/images/share.jpg')} style={{width:20,height:20,margin:10}}/>
                    </View>
                    <Image source={require('../../assets/images/save.jpg')} style={{width:20,height:20,margin:10}}/>
                </View>
                <Text style={{fontWeight:'bold', marginHorizontal:10,marginTop:5}}>{this.props.item.likes.length} likes</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', marginLeft:10}}>{this.props.item.username}  </Text>
                <Text>{this.props.item.description}</Text>
                </View>
                <TouchableOpacity >
                    <Text style={{marginHorizontal:10, color:'grey', marginTop:5}}>Show all the comments: {this.props.item.comments.length}</Text>
                    </TouchableOpacity>
                <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={{uri:this.props.user.photo}}
                    style={{width:32, height:32, borderRadius:16, marginHorizontal:10, marginTop:5}}/>
                    <Text style={{color:'grey', marginTop:5}}>Add a comment...</Text>
                </View>
                
                    <Image source={require('../../assets/images/emojis.jpg')} style={{width:90,height:17,margin:10}}></Image>
                
                </View>
                <Text style={{marginHorizontal:10, color:'grey', marginTop:5}}> {moment(this.props.item.date).format('ll')}</Text>
            </View>
            
        )
    }
}

