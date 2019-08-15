import { combineReducers } from 'redux';

import dashboard from './dashboard';
import current from './create-qoute';

const reducers = combineReducers({
	dashboard: dashboard,
	current: current,
});

export default reducers;