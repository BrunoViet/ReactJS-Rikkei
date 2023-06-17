//Tạo xong reducer tiếp tục tạo store (Bước 2)

import { createStore } from "redux";
import todoReducer from "../reducers/countReducers";


const countStore = createStore(todoReducer)//deprecated: tương lai bị loại bỏ

export default countStore