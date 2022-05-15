import {call, put, takeEvery} from 'redux-saga/effects';

import {Get_users_fetch, getUserSuccess} from '../action/index';

function* fetchUser() {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const users = yield response.json();
    yield put(getUserSuccess(users))
}

function* mySaga() {
    // take every listen for the action call, api call
    yield takeEvery(Get_users_fetch, fetchUser) //take latast
}

export default mySaga;

