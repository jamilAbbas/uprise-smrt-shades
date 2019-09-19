import * as constants from './constants';

export function setPriceRequest(data) {
    return {
        type: constants.SET_PRICE_REQUEST,
        data,
    }
} 

export function setPriceSuccess(data) {
    return {
        type: constants.SET_PRICE_SUCCESS,
        data,
    }
} 

export function setPriceFailure() {
    return {
        type: constants.SET_PRICE_FAILURE,
    }
} 

export function getPriceRequest() {
    return {
        type: constants.GET_PRICE_REQUEST,
    }
} 

export function getPriceSuccess(data) {
    return {
        type: constants.GET_PRICE_SUCCESS,
        data,
    }
} 

export function getPriceFailure() {
    return {
        type: constants.GET_PRICE_FAILURE,
    }
} 