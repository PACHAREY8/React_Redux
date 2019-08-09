import { createStore,applyMiddleware } from "redux";
import  ThunkMiddleware from "redux-thunk";
import {createLogger}  from "redux-logger"
import combineReducer from './Reducer/combineReducer'
const loggerMiddleware=createLogger();
export const store=createStore(
    combineReducer,
    applyMiddleware(
        ThunkMiddleware,
        loggerMiddleware
    )
)