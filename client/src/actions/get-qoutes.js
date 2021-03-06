import * as constants from './constants';
import jwt from 'jsonwebtoken';

function getUser() {
    let user = JSON.parse(localStorage.getItem('user'));
    const token = user.token.slice(user.token.indexOf(' ') + 1);
    return user = jwt.decode(token)
}

export function fetchListRequest() {
    const user = getUser();
    return {
        type: constants.FETCH_LIST_REQUEST,
        id: user.id,
    }
} 

export function fetchListSuccess(data) {
    return {
        type: constants.FETCH_LIST_SUCCESS,
        data
    }
}

export function fetchListFailed(error) {
    return {
        type: constants.FETCH_LIST_FAILURE,
        error
    }
}

export function fetchUserListRequest() {
    const user = getUser();
    return {
        type: constants.FETCH_USER_LIST_REQUEST,
        id: user.id,
    }
}

export function fetchUserListSuccess(data) {
    return {
        type: constants.FETCH_USER_LIST_SUCCESS,
        data
    }
}

export function fetchUserListFailed(error) {
    return {
        type: constants.FETCH_USER_LIST_FAILURE,
        error
    }
}

export function toggleIsActive(id, data) {
    return {
        type: constants.TOGGLE_IS_ACTIVE,
        id,
        data
    }
}

export function updateRoleRequest(id, data) {
    return {
        type: constants.UPDATE_ROLE_REQUEST,
        id,
        data
    }
}