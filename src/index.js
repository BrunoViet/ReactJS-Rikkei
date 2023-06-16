import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import countStore from './store/countStore';
//Mới vào phải bọc Provider quanh a
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Bước 3: Tạo xong store thì về lại đây config để file App có được thuộc tính store
  <Provider store={countStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
