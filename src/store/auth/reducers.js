import {CHANGE_PASSWORD, AUTH_CHANGE_STATUS, CHANGE_USERNAME, CHANGE_REPEAT_PASSWORD, CODE_CHANGE_STATUS, USER_CHANGE_STATUS, CHANGE_NAME} from "./actions";

const initialState = {
    name: '',
    username: '',
    password: '',
    repeatPassword: '',
    userStatus: 'student',
    code: '',
    authStatus: false
};

export const authReducer = (state = initialState,action) =>{
    switch (action.type) {
        case CHANGE_NAME:
            return{
                ...state, name: action.payload
            };
        case CHANGE_USERNAME:
            return{
                ...state, username: action.payload
            };
        case CHANGE_PASSWORD:
            return {
                ...state, password: action.payload
            };
        case CHANGE_REPEAT_PASSWORD:
            return {
                ...state, repeatPassword: action.payload
            };
        case AUTH_CHANGE_STATUS:
            return {
                ...state, authStatus: action.payload
            };
        case USER_CHANGE_STATUS:
            return {
                ...state, userStatus: action.payload
            };
        case CODE_CHANGE_STATUS:
            return {
                ...state, code: action.payload
            };
        default:
            return state
    }
};