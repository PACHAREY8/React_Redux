import { combineReducers } from "redux";
import {alertReducer} from './alertReducer' 
import {registrationReducer} from './registrationReducer'
import {LoginReducer} from './loginReducer'
export default combineReducers({
    alertReducer,
    registrationReducer,
    LoginReducer
})

