import * as constants from './constants';
import jwt from 'jsonwebtoken';

function getUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    const token = user.token.slice(user.token.indexOf(' ') + 1);
    return user = jwt.decode(token)
}

export function createQouteRequest(data) {
    const user = getUser();
    return {
        type: constants.CREATE_QOUTE_REQUEST,
        values: { ...data, userId: user.id }
    }
}

export function createQouteSuccess(data) {
    return {
        type: constants.CREATE_QOUTE_SUCCESS,
        data
    }
}

export function createQouteError(error) {
    return {
        type: constants.CREATE_QOUTE_ERROR,
        error
    }
}

export function setValuesRequest(data) {
    const user = getUser();
    return {
        type: constants.SET_DETAILS_REQUEST,
        values: {
            ...data, userId: user.id
        }
    }
}

export function setValuesSuccess(data) {
    return {
        type: constants.SET_DETAILS_SUCCESS,
        data
    }
}

export function setValuesError(error) {
    return {
        type: constants.SET_DETAILS_ERROR,
        error
    }
}