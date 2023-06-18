//Tạo xong reducer tiếp tục tạo store (Bước 2)

import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducers/CartReducers";
import { listProductReducer } from "../reducers/ListProductReducers";

export const reducer = combineReducers({
    cart: cartReducer,
    listProduct: listProductReducer
})

const listProductStore = createStore(reducer)//deprecated: tương lai bị loại bỏ

export default listProductStore