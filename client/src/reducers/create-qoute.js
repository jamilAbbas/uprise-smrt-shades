import * as constants from '../actions/constants';
const initialstate = {
    current: [],
    loading: false
}

const dashboard = (state = initialstate, action) => {
    switch (action.type) {
        case constants.CREATC_QOUTE_REQUEST: {
            return Object.assign({}.state, {
                loading: true
            });
        }
        case constants.CREATC_QOUTE_SUCCESS: {
            return Object.assign({}.state, {
                current: state.current.push(action.data),
                loading: false
            });
        }
        case constants.CREATC_QOUTE_ERROR: {
            return Object.assign({}.state, {
                loading: false
            });
        }
        case constants.DELETE_QOUTE:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default dashboard