import * as constants from '../actions/constants';
const initialstate = {
    activeQoutes: [],
    loading: false,
    users: [],
}

const dashboard = (state = initialstate, action) => {
    switch (action.type) {
        case constants.FETCH_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case constants.FETCH_LIST_SUCCESS: {
            // const activeQoutes = Object.assign({}.state, {
            //     activeQoutes: state.activeQoutes.push(action.data)
            // });
            return Object.assign({}, state, {
                activeQoutes: action.data,
                loading: false
            });
        }
        case constants.FETCH_LIST_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });

        //User List for Admin user only
        case constants.FETCH_USER_LIST_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case constants.FETCH_USER_LIST_SUCCESS:
            return Object.assign({}, state, {
                users: action.data,
                loading: false
            });
        case constants.FETCH_USER_LIST_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });

        case 'ADD_QOUTES':
            return [
                ...state,
            ]
        case 'DELETE_QOUTES':
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