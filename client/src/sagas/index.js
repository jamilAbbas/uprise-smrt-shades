import { put, takeLatest, all } from "redux-saga/effects";
import { notification, message } from "antd";
import axios from "axios";

import * as constants from "../actions/constants";
import * as actions from "../actions/auth-actions";

function* workerUserLogin(action) {
  try {
    const response = yield axios.post("users/login", action.values);
    yield put(actions.loginSuccess(response.data));
    notification.success({
      message: "Success",
      description: "Login Success",
      placement: "bottomRight"
    });
  } catch (error) {
    notification.error({
      message: "Login Failed",
      description: error.message,
      placement: "bottomRight"
    });
    yield put(actions.loginFailed(error.message));
  }
}

function* workerUserRegester(action) {
  console.log("register user saga", action.values);
  try {
    const response = yield axios.post("users/register", action.values);
    yield put(actions.registerSuccess(response.data));
    notification.success({
      message: "Success",
      description: "Login Success",
      placement: "bottomRight"
    });
  } catch (error) {
    notification.error({
      message: "ERROR",
      description: error.message,
      placement: "bottomRight"
    });
    yield put(actions.registerFailed(error.message));
  }
}

function* watchAll() {
  yield all([
    takeLatest(constants.USER_LOGIN_REQUEST, workerUserLogin),
    takeLatest(constants.USER_SIGNUP_REQUEST, workerUserRegester)
  ]);
}

export default watchAll;
