//Tạo xong reducer tiếp tục tạo store (Bước 2)

import countReducer from "../reducers/countReducers";
import { createStore } from "redux";


const countStore = createStore(countReducer)//deprecated: tương lai bị loại bỏ

export default countStore