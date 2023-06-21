export const addProductToCart = (product) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: product
    }
}

export const updateProductToCart = (product) => {
    console.log(product)
    return {
        type: 'UPDATE_PRODUCT_TO_CART',
        payload: product
    }
}

export const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT_TO_CART',
        payload: id
    }
}