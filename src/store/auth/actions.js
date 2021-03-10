export const CHANGE_NAME = "AUTH_CHANGE_NAME";
export const CHANGE_USERNAME = "AUTH_CHANGE_USERNAME";
export const CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD";
export const AUTH_CHANGE_STATUS = "AUTH_CHANGE_STATUS";
export const USER_CHANGE_STATUS = "USER_CHANGE_STATUS";
export const CODE_CHANGE_STATUS = "CODE_CHANGE_STATUS";
export const CHANGE_REPEAT_PASSWORD = "REGISTRATION_CHANGE_REPEAT_PASSWORD";

export const setName = username =>({
    type: CHANGE_NAME,
    payload: username
});

export const setUsername = username =>({
    type: CHANGE_USERNAME,
    payload: username
});

export const setPassword = password =>({
    type: CHANGE_PASSWORD,
    payload: password
});

export const setAuthStatus = authStatus =>({
    type: AUTH_CHANGE_STATUS,
    payload: authStatus
});

export const setUserStatus = userStatus =>({
    type: USER_CHANGE_STATUS,
    payload: userStatus
});

export const setUserCode = code =>({
    type: CODE_CHANGE_STATUS,
    payload: code
});

export const setRepeatPassword = repeatPassword =>({
    type: CHANGE_REPEAT_PASSWORD,
    payload: repeatPassword
});