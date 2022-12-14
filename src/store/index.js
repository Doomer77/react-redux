//Создаем store, это объект, который содержит несколько методов, а именно методы получение состояния getState, змение состояние с помощью dicpatch, и подписаться на изменеие состояния
import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from "./cashRreducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootRreducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
});

export const store = createStore(rootRreducer, composeWithDevTools(applyMiddleware(thunk)));