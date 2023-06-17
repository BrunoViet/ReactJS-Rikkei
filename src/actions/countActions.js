export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

export const updateTodo = (todo) => {
    return {
        type: 'UPDATE_TODO',
        payload: todo
    }
}

export const updateStatusTodo = (todo) => {
    return {
        type: 'UPDATE_STATUS_TODO',
        payload: todo
    }
}