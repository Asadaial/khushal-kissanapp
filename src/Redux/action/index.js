export const Get_users_fetch = 'Get_user_fetch';
export const Get_users_success = 'Get_user_success';




export const getUserFetch = () => ({
    type: Get_users_fetch
})

export const getUserSuccess = (users) => ({
    type: Get_users_success,  
    payload: users
})

export const increment = (num) =>{
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () =>{
    return {
        type: 'DECREMENT',
    }
}