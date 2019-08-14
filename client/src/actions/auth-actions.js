import * as constants from './constants';

export function loginRequest(values) {
    return {
        type: constants.USER_LOGIN_REQUEST,
        values
    }
}

export function loginSuccess(data) {
    return {
        type: constants.USER_LOGIN_SUCCESS,
        data
    }
}

export function loginFailed(error) {
    return {
        type: constants.USER_LOGIN_FAILURE,
        error
    }
}


export function registerRequest(values) {
    return {
        type: constants.USER_SIGNUP_REQUEST,
        values
    }
}

export function registerSuccess(data) {
    return {
        type: constants.USER_SIGNUP_SUCCESS,
        data
    }
}

export function registerFailed(error) {
    return {
        type: constants.USER_SIGNUP_FAILURE,
        error
    }
}