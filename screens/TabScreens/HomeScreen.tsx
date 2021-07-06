import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image, FlatList} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPosts } from "../../actions/post";
import PostComponent from '../Components/PostComponent';

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width


class HomeScreen extends React.Component {
    componentDidMount = ()=>{
        this.props.getPosts()
    }
    render(){
        return (
            <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                
                <FlatList
            
                data={this.props.post.feed}
                keyExtractor={(item) => JSON.stringify(item.uid)}
                renderItem={({item})=>(
                    <PostComponent
                    item = {item}
                    user={this.props.user}
                    />
                )}>
                </FlatList>
                {/* <Text style={{fontSize:35, fontFamily:'logo-font', marginVertical:60, color:'#0095f6'}}>HomeScreen</Text> */}
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPosts}, dispatch)
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(HomeScreen)