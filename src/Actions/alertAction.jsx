import { alertConstants } from "../Constants/alertConstants";
export const alertActions ={
    success,
    error,
    clear
}
function success(message){
    console.log("message from alert Action",message);
    
    return {type : alertConstants.SUCCESS,data:message}
} 
function error(message){
    return {type : alertConstants.ERROR,message}
}
function clear(message){
    return {type : alertConstants.CLEAR,message}
}