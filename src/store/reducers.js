import {combineReducers} from 'redux';
import {authReducer} from "./auth/reducers";
import {studReducer} from "./stud/reducers";



export default combineReducers({
    auth: authReducer,
    stud: studReducer

});