const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            const updatedTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: updatedTodos
            }
        case 'UPDATE_TODO':
            const updatedTodoList = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        name: action.payload.name,
                        done: action.payload.done
                    }
                } else {
                    return todo
                }
            })
            return {
                ...state,
                todos: updatedTodoList
            }
        case 'UPDATE_STATUS_TODO':
            const updatedStatusTodo = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        name: action.payload.name,
                        done: action.payload.done
                    }
                } else {
                    return todo
                }
            })
            return {
                ...state,
                todos: updatedStatusTodo
            }
        default:
            return state
    }
}
export default todoReducer