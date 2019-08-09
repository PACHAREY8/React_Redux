import { combineReducers } from "redux";
import {alertReducer} from './alertReducer' 
import {registrationReducer} from './registrationReducer'
export default combineReducers({
    alertReducer,
    registrationReducer
})

