import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./store";

//акшен, JS объект у которого обязательное поле type и payload, куда передаются данные
// action = {
//     type: '',
//     payload: ''
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

