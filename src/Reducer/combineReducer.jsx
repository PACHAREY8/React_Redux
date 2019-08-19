import { combineReducers } from "redux";
import {alertReducer} from './alertReducer' 
import {registrationReducer} from './registrationReducer'
import {LoginReducer} from './loginReducer'
import {orderApproval} from './orderApprovalReducer'
import {orderRejection} from './orderRejectionReducer'
import {ansApproval} from './ansApprovalReducer'
import {ansRejection} from './ansRejectionReducer'

export default combineReducers({
    alertReducer,
    registrationReducer,
    LoginReducer,
    orderApproval,
    orderRejection,
    ansApproval,
    ansRejection
})

