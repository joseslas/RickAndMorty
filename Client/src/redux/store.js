import { createStore, applyMiddleware, compose } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose;

const store = createStore(reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
);

export default store;