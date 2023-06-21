const initialState = {
    cart: [],
    totalPrice: 0,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            let isExist = false;
            let existProduct = {}
            let indexExist = 0
            state.cart.forEach(item => {
                state.totalPrice += Number(item.price * item.quantity)
                if (item.id === action.payload.data.id) {
                    isExist = true
                    existProduct = {
                        ...item
                    }
                    indexExist = state.cart.indexOf(item)
                }
            })
            if (!isExist) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload.data],
                    totalPrice: state.totalPrice
                }
            } else {
                existProduct.quantity += 1
                state.cart[indexExist] = existProduct

                return {
                    ...state,
                    cart: [...state.cart],
                    totalPrice: state.totalPrice

                }
            }
        case 'UPDATE_PRODUCT_TO_CART':
            const updatedProductList = state.cart.map(item => {
                state.totalPrice += Number(item.price * item.quantity)
                if (item.id === action.payload.data.id) {
                    return {
                        ...item,
                        quantity: action.payload.data.quantity
                    }
                } else {
                    return item
                }
            })
            return {
                ...state,
                cart: updatedProductList,
                totalPrice: state.totalPrice

            }
        case 'DELETE_PRODUCT_TO_CART':
            const updatedProduct = state.cart.filter(item => item.id !== action.payload)
            return {
                ...state,
                cart: updatedProduct
            }
        default:
            return state
    }
}
