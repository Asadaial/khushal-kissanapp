import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

import thunk from "redux-thunk";


import mySaga from "./saga/saga";
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);





export default store;