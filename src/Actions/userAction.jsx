import {AdminRegister, adminLogin, OrderApproval} from '../Services/service'
import  {alertActions} from './alertAction'
import {userConstant} from '../Constants/userConstant'
export const userAction={
register,
login,
Approval
}
function register(data){
    return dispatch =>{
        dispatch(request(data));
        AdminRegister(data)
        .then(
            data =>{
                dispatch(success(data));
            window.location.href='/adminSignIn'
            dispatch(alertActions.success('Registered successfully'));
             }
        )
        .catch(
            error=>{
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request(data){return{type:userConstant.REGISTER_REQUEST,data}}
    function success(data){return{type:userConstant.REGISTER_SUCCESS,data}}
    function failure(error){return{type:userConstant.REGISTER_FAILURE,error}}
}
function login(data){
return dispatch=>{
    dispatch(request(data))
    adminLogin(data)
    .then(
        data=>{
            dispatch(success(data));
            console.log(data);
            window.location.href='/dashboardComponent'
            dispatch(alertActions.success('Logged In Successfully'))
        }
    )
    .catch(
        error=>{
            dispatch(failure(error.toString()))
            dispatch(alertActions.error(error.toString()))
        }
    )
}
function request(data) {return {type:userConstant.LOGIN_REQUEST,data}}
function success(data) {return{type:userConstant.LOGIN_SUCCESS,data}}
function failure(error){return{type:userConstant.LOGIN_FAILURE,error}}
}
function Approval(data){
    return dispatch=>{
        dispatch(request(data))
        OrderApproval(data)
    }

}