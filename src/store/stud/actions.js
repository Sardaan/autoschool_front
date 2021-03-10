export const FORM_CHANGE_NAME = "FORM_CHANGE_NAME";
export const FORM_CHANGE_LICENCE = "FORM_CHANGE_LICENCE";
export const FORM_CHANGE_FORMAT = "FORM_CHANGE_FORMAT";
export const FORM_CHANGE_TIME = "FORM_CHANGE_TIME";


export const changeName = name =>({
    type: FORM_CHANGE_NAME,
    payload: name
});
export const changeLicence = licence =>({
    type: FORM_CHANGE_LICENCE,
    payload: licence
});
export const changeEdFormat = edFormat =>({
    type: FORM_CHANGE_FORMAT,
    payload: edFormat
});
export const changeEdTime = edTime =>({
    type: FORM_CHANGE_TIME,
    payload: edTime
});
