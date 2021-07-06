import { State } from "react-native-gesture-handler";
import { action, combineReducers } from "redux";

const user = (state = {}, action) =>{
    switch (action.type){
        case 'LOGIN':
            return action.payload
        case 'UPDATE_EMAIL':
            return {...state,email:action.payload}
        case 'UPDATE_PASSWORD':
            return {...state,password:action.payload}
        case 'UPDATE_USERNAME':
            return {...state,username:action.payload.toLowerCase().replace(' ','_')}
        case 'UPDATE_PHOTO':
            return {...state,photo:action.payload}
        default:
            return state
    }
}

const post = (state={}, action) =>{
    switch(action.type){
        case 'UPDATE_POST_NEXT_PHOTO':
            return {...State, photos:action.payload}
        case 'UPDATE_DESCRIPTION':
            return {...state, description:action.payload}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user,
    post
})

export default rootReducer