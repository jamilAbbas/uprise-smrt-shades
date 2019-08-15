import React from "react";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "../reducers/index";
import mySaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);
