//Bước 4: Định nghĩa các actions để biết đó là hành động gì và tên gì

export const upCount = (value) => {
    return {
        type: 'UP_COUNT',
        payload: value
    }
}

export const downCount = (value) => {
    return {
        type: 'DOWN_COUNT',
        payload: value
    }
}

