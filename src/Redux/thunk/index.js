import {getUserFetch, getUserSuccess} from '../action/index';

export function getUserRequest () {
    return function (dispatch) {
        // dispatch(getUserFetch());   // can be used for preloader

        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(getUserSuccess(json)))
    }
}