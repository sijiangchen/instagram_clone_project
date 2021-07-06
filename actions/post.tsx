import uuid from "uuid";
import firebase from 'firebase/app';
import db from "../config/Firebase";
import "firebase/firestore";
import { exp } from "react-native-reanimated";

export const updateDescription = (input) =>{
    return {type:'UPDATE_DESCRIPTION',payload:input}
}

export const updateNextPhoto = (input) =>{
    return async (dispatch, getState) =>{
        try {
            let array = []
            const {post} =getState()
            post.photos?.forEach(photo =>{
                array.push(photo)
            })
            array.push(input)
            
            dispatch({type:'UPDATE_POST_NEXT_PHOTO',payload:array})
        }catch(e){

            alert(e)
        }
    }
}

export const removeImage = (photoToremove) =>{
    return async (dispatch, getState) =>{
        try {
            let array = []
            const {post} = getState()
            post.photos?.forEach(photo =>{
                array.push(photo)
            })
            
            array.splice(photoToremove,1)
            dispatch({type: 'UPDATE_POST_NEXT_PHOTO',payload:array})

        }catch(e){
          
            alert(e)
        }
    }
}

export const uploadPost = () => {
	return async (dispatch, getState) => {
		try{
			const { post, user } = getState()
			const id = uuid.v4()
			const upload = {
				id:id,
				uid: user.uid,
				photo: user.photo,
				photos: post.photos,
				username: user.username,
				date: new Date().getTime(),
				likes:[],
				comments:[],
				description: post.description,
			}
            
			
			await db.collection('posts').doc(id).set(upload)
			await db.collection('users').doc(user.uid).update({
				posts: firebase.firestore.FieldValue.arrayUnion(id)
			})
		}catch(e){
			alert(e)
            
		}
	}
}

export const getPosts =(numberOfPosts) =>{
    return async (dispatch, getState) =>{
        const posts = await db.collection('posts').orderBy('date','desc').limit(numberOfPosts).get()

        let array = []
        posts.forEach(post => {
            array.push(post.data())
        });

        dispatch({type:"GET_POSTS",payload:array})
    }
}