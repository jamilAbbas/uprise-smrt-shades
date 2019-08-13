import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from '../reducers/index';
import mySaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    combineReducers({
        state: reducers
    }),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga)