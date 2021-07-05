import uuid from "uuid";
import * as firebase from 'firebase';
import db from "../config/Firebase";

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