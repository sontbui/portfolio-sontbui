// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Nhập Provider
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from 'react-i18next';
import i18n from './translate/i18n';
import reducer from "./store/reducer";
import { configureStore } from "@reduxjs/toolkit";


const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore({reducer});

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    <App />
    </I18nextProvider>
  </Provider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}> {/* Bao bọc App trong Provider */}
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// Nếu bạn muốn bắt đầu đo hiệu suất trong ứng dụng của mình, hãy truyền một hàm
// để ghi lại kết quả (ví dụ: reportWebVitals(console.log))
// hoặc gửi tới một điểm phân tích. Tìm hiểu thêm: https://bit.ly/CRA-vitals
reportWebVitals();
