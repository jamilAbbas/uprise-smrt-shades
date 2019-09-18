import { put, takeEvery, takeLatest, all } from "redux-saga/effects";
import { notification, message } from "antd";
import jwt from 'jsonwebtoken';

import axios from "axios";

import * as qoutes from "../actions/get-qoutes";
import * as constants from "../actions/constants";
import * as actions from "../actions/auth-actions";
import * as userQoutes from '../actions/create-qoute';
import * as prices from '../actions/price-action';

function getUser(data) {
  const token = data.token.slice(data.token.indexOf(' ') + 1);
  return jwt.decode(token)
}

function* workerUserLogin(action) {
  try {
    const response = yield axios.post("/users/login", action.values);
    localStorage.setItem('user', JSON.stringify(response.data));
    const user = getUser(response.data);
    if (user.isActive) {
      yield put(actions.loginSuccess(response.data));
      // action.history.push('/dashboard');
      notification.success({
        message: "Success",
        description: "Login Success",
        placement: "bottomRight"
      });
      if (user.role === 'Admin') {
        window.location.href = "/admin-dashboard"
      } else {
        window.location.href = "/dashboard"
      }
    } else {
      notification.warning({
        message: "Warning!!!",
        description: "Please contect the uprise smart shade support team.",
        placement: "bottomRight"
      });
    }
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
    const response = yield axios.post("/users/register", action.values);
    yield put(actions.registerSuccess(response.data));
    notification.success({
      message: "Success",
      description: "User created successfully!",
      placement: "bottomRight"
    });
    action.history.push('/login');
  } catch (error) {
    notification.error({
      message: "ERROR",
      description: error.message,
      placement: "bottomRight"
    });
    yield put(actions.registerFailed(error.message));
  }
}

function* workerFetchUserQoutes(action) {
  try {
    const response = yield axios.get(`/quotes/user/${action.id}`);
    yield put(qoutes.fetchListSuccess(response.data));
    message.success("Fetch user's qoutes successfully!");
  } catch (error) {
    message.error("Error while fetching list!!");
    yield put(qoutes.fetchListFailed(error.message));
  }
}

function* workerCreateQoute(action) {
  try {
    const response = yield axios.post(`/quotes/create`, action.values);
    yield put(userQoutes.createQouteSuccess(response.data));
    message.success("Qoutes created successfully!");
  } catch (error) {
    message.error("Error while creating qoutes!");
    yield put(userQoutes.createQouteError(error.message));
  }
}

function* workerFetchUserList() {
  try {
    const response = yield axios.get(`/users/all`);
    yield put(qoutes.fetchUserListSuccess(response.data));
    message.success("Fetch users successfully!");
  } catch (error) {
    message.error("Error while fetching user!");
    yield put(qoutes.fetchUserListFailed(error.message));
  }
}

function* workerSetIsActive(action) {
  try {
    const response = yield axios.put(`/users/${action.id}`, action.data);
    yield put(qoutes.fetchUserListRequest());
    message.success("Update user successfully");
  } catch (error) {
    message.error("Failed to update user!");
    yield put(qoutes.fetchUserListFailed(error.message));
  }
}

function* workerUpdateRole(action) {
  try {
    const response = yield axios.put(`/users/${action.id}/role`, action.data);
    yield put(qoutes.fetchUserListRequest());
    message.success("Update user successfully");
  } catch (error) {
    message.error("Failed to update user!");
    yield put(qoutes.fetchUserListFailed(error.message));
  }
}

function* workerSetPrice({ data }) {
  console.log("Prices:::", data)
  try {
    const response = yield axios.put(`/users/set-proces`, data);
    yield put(prices.setPriceSuccess(response.data));
    message.success("Set pricess successfully!");
  } catch (error) {
    message.error("Some thing wrong with the request!");
    yield put(prices.setPriceFailure(error.message));
  }
}

function* watchAll() {
  yield all([
    takeLatest(constants.USER_LOGIN_REQUEST, workerUserLogin),
    takeLatest(constants.TOGGLE_IS_ACTIVE, workerSetIsActive),
    takeLatest(constants.UPDATE_ROLE_REQUEST, workerUpdateRole),
    takeLatest(constants.CREATE_QOUTE_REQUEST, workerCreateQoute),
    takeLatest(constants.USER_SIGNUP_REQUEST, workerUserRegester),
    takeLatest(constants.FETCH_LIST_REQUEST, workerFetchUserQoutes),
    takeLatest(constants.FETCH_USER_LIST_REQUEST, workerFetchUserList),
    takeLatest(constants.SET_PRICE_REQUEST, workerSetPrice),
  ]);
}

export default watchAll;
