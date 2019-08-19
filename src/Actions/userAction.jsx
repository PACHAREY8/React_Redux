import {AdminRegister, adminLogin, OrderApproval, OrderReject, userCartList, ansApproved, ansRejectt, getUnapprovedAnswer} from '../Services/service'
import  {alertActions} from './alertAction'
import {userConstant} from '../Constants/userConstant'
export const userAction={
register,
login,
Approval,
Reject,
ansApproval,
ansReject
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
        .then(
            data=>{
                dispatch(success(data))
                console.log("order approval data from backend",data);
                dispatch(alertActions.success(data.data.data))
            }
        )
        .catch(
            error=>{
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request(data){return{type:userConstant.ORDER_APPROVAL_REQUEST,data}}
    function success(data){return{type:userConstant.ORDER_APPROVAL_SUCCESS,data}}
    function failure(error){return{type:userConstant.ORDER_APPROVAL_FAILURE,error}}

}
export function Reject(data){
    return dispatch=>{
        dispatch(request(data))
        OrderReject(data)
        .then(
            data=>{
                dispatch(success(data))
                dispatch(alertActions.success(data.data.data))
            }
        )
        .catch(
            error=>{
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
            )
    }
    function request(data){return{type:userConstant.ORDER_REJECTION_REQUEST,data}}
    function success(data){return{type:userConstant.ORDER_REJECTION_SUCCESS,data}}
    function failure(error){return{type:userConstant.ORDER_REJECTION_FAILUER,error}}

}
export function ansApproval(parentId,isApproved){
    return dispatch=>{
        dispatch(request(parentId,isApproved))
        ansApproved(parentId,isApproved)
        .then(
            data=>{
                dispatch(success(data))
                dispatch(alertActions.success(data.data.data))
            }
        )
        .catch(
            error=>{
                dispatch(failure(error.toString()))
                dispatch(alertActions.error(error.toString()))
            }
        )
    }
    function request(parentId,isApproved){return{type:userConstant.ANS_APPROVAL_REQUEST,parentId,isApproved}}
    function success(data){return{type:userConstant.ANS_APPROVAL_SUCCESS,data}}
    function failure(error){return{type:userConstant.ANS_APPROVAL_FAILURE,error}}
}
export function ansReject(parentId,isApproved){
   return dispatch=>{
       dispatch(request(parentId,isApproved))
       ansRejectt(parentId,isApproved)
       .then(
           data=>{
               dispatch(success(data))
               dispatch(alertActions.success(data.data.data))
           }
       )
       .catch(
           error=>{
               dispatch(failure(error.toString()))
               dispatch(alertActions.error(error.toString()))
           }
       )


    }
    function request(parentId,isApproved){return{type:userConstant.ANS_REJECTION_REQUEST,parentId,isApproved}}
    function success(data){return{type:userConstant.ANS_REJECTION_SUCCESS,data}}
    function failure(error){return{type:userConstant.ANS_REJECTION_FAILURE,error}}
}
