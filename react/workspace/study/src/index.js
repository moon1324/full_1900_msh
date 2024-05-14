import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// redux를 추가하는 로직
import { legacy_createStore as createStore } from "redux";
// import count from "./redux/modules/count";
// import font from "./redux/modules/font";
import { devToolsEnhancer } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { RouteProvider } from "./context/RouteContext";

import route from "./routes/modules/route";

// const store = createStore(count, devToolsEnhancer());
// const store = createStore(font, devToolsEnhancer());

const store = createStore(route, devToolsEnhancer());

const root = ReactDOM.createRoot(document.getElementById("root"));
// index.js 기본설정
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// root.render(
//     <>
//         <BrowserRouter>
//         <Provider store={store}>
//             <RouteProvider>
//                 <App />
//             </RouteProvider>
//         </Provider>
//         </BrowserRouter>
//     </>
// );

root.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
