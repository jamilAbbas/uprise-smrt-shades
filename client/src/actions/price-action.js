import jwt from "jsonwebtoken";
import * as constants from "./constants";

function getUser() {
  let user = JSON.parse(localStorage.getItem("user"));
  const token = user.token.slice(user.token.indexOf(" ") + 1);
  return (user = jwt.decode(token));
}

export function setPriceRequest(data) {
  const user = getUser();
  return {
    type: constants.SET_PRICE_REQUEST,
    data: {
      ...data,
      userId: user.id
    }
  };
}

export function setPriceSuccess(data) {
  return {
    type: constants.SET_PRICE_SUCCESS,
    data
  };
}

export function setPriceFailure() {
  return {
    type: constants.SET_PRICE_FAILURE
  };
}

export function getPriceRequest() {
  return {
    type: constants.GET_PRICE_REQUEST
  };
}

export function getPriceSuccess(data) {
  return {
    type: constants.GET_PRICE_SUCCESS,
    data: data[0]
  };
}

export function getPriceFailure() {
  return {
    type: constants.GET_PRICE_FAILURE
  };
}
