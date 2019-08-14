import * as constants from './constants';

export function createQoute(data) {
    return {
        type: constants.CREATC_QOUTE,
        data
    }
}