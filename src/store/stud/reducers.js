import {FORM_CHANGE_NAME, FORM_CHANGE_LICENCE, FORM_CHANGE_FORMAT, FORM_CHANGE_TIME} from "./actions";

const initialState = {
    name : '',
    licence : 1,
    edFormat : 'online',
    edTime: 'day'
};

export const studReducer = (state = initialState,action) =>{
    switch (action.type) {
        case FORM_CHANGE_NAME:
            return{
                ...state, name: action.payload
            };
        case FORM_CHANGE_LICENCE:
            return {
                ...state, licence: action.payload
            };
        case FORM_CHANGE_FORMAT:
            return {
                ...state, edFormat: action.payload
            };
        case FORM_CHANGE_TIME:
            return {
                ...state, edTime: action.payload
            };
        default:
            return state
    }
};