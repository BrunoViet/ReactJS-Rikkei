//cấu hình reducers đầu tiên (Bước 1)

const initState = {
    count: 0,
}

const countReducer = (state = initState, action) => {
    //Bước 5: khởi tạo các trường hợp nếu các hành động xảy ra thuộc thể loại gì
    switch (action.type) {
        case 'UP_COUNT':
            return {
                // ...state,
                count: state.count + action.payload
            }
        case 'DOWN_COUNT':
            return {
                // ...state,
                count: state.count - action.payload
            }
        default:
            return {
                // ...state,
                count: state.count
            }
    }
}

export default countReducer