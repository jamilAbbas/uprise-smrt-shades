import * as constants from '../actions/constants';
const initialstate = {
    current: [],
}

const dashboard = (state = initialstate, action) => {
    switch (action.type) {
        case constants.CREATC_QOUTE: {
            const current = Object.assign({}.state, {
                current: state.current.push(action.data)
            });
            return Object.assign({}.state, {
                current: state.current.push(action.data)
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