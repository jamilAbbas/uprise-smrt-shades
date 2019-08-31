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
        type: constants.CREATC_QOUTE_REQUEST,
        values: { ...data, userId: user.id }
    }
}

export function createQouteSuccess(data) {
    return {
        type: constants.CREATC_QOUTE_SUCCESS,
        data
    }
}

export function createQouteError(error) {
    return {
        type: constants.CREATC_QOUTE_ERROR,
        error
    }
}