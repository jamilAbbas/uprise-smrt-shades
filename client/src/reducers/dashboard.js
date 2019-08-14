const initialstate = {
    activeQoutes: [
        {
            name: "Smith",
            age: 20,
            address: 'North Carolina',
            tags: 'Data Science',
            status: 'PENDING'
        },
        {
            name: "Joy Lobo",
            age: 20,
            address: 'South Carolina',
            tags: 'Dev',
            status: 'PENDING'
        },
        {
            name: "Jhon",
            age: 20,
            address: 'Florida',
            tags: 'Tech',
            status: 'PAID'
        },
        {
            name: "Bob",
            age: 20,
            address: 'Houwia',
            tags: 'Data Science',
            status: 'IN PROCESS'
        },
    ],
}

const dashboard = (state = initialstate, action) => {
    switch (action.type) {
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