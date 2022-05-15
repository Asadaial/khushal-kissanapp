import changeNumber from "./AddDel";
import getUser from './getUser'
import { combineReducers } from "redux";

const rootReducer = combineReducers({changeNumber, getUser});

export default rootReducer;