const initialstate = {
    activeQoutes: [
        {
            key: 101,
            name: "Smith",
            age: 31,
            address: 'North Carolina',
            tags: 'Data Science',
            status: 'PENDING'
        },
        {
            key: 102,
            name: "Joy Lobo",
            age: 31,
            address: 'South Carolina',
            tags: 'Dev',
            status: 'PENDING'
        },
        {
            key: 103,
            name: "Jhon",
            age: 34,
            address: 'Florida',
            tags: 'Tech',
            status: 'PAID'
        },
        {
            key: 104,
            name: "Bob",
            age: 20,
            address: 'Houwia',
            tags: 'Data Science',
            status: 'IN PROCESS'
        },
        {
            key: 105,
            name: "Jasom",
            age: 21,
            address: 'Carolina',
            tags: 'some tags here',
            status: 'PENDING'
        },
        {
            key: 106,
            name: "Rechard",
            age: 41,
            address: 'South Carolina',
            tags: 'Dev',
            status: 'PENDING'
        },
        {
            key: 107,
            name: "Mike",
            age: 31,
            address: 'Florida',
            tags: 'Venture',
            status: 'PAID'
        },
        {
            key: 108,
            name: "Alice",
            age: 30,
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