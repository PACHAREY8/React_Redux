import {AdminRegister} from '../Services/service'
import  {alertActions} from './alertAction'
import {userConstant} from '../Constants/userConstant'
export const userAction={
register,
}
function register(data){
    return dispatch =>{
        dispatch(request(data));
        AdminRegister(data)
        .then(
            dataa =>{
                dispatch(success());
            this.props.history.push('/login')
            dispatch(alertActions.success('Registered successfull'));
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
    function success(dataa){return{type:userConstant.REGISTER_SUCCESS,dataa}}
    function failure(error){return{type:userConstant.REGISTER_FAILURE,error}}
}