const initialState = {
    users: []
}

import {Get_users_success, Get_users_fetch} from '../action/index'

const getUser = (state = initialState , action) =>{
    switch(action.type){
        case Get_users_success :
            return {...state, users: action.payload};
        default:
            return state;
    }
}

export default getUser;
