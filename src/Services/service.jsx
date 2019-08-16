import axios from 'axios';
import {authHeader} from '../Helpers/authHeader'
const baseUrl="http://34.213.106.173/api"
export function AdminRegister(data) {
    return axios.post(baseUrl+`/user/adminSignUp`, data)
}

export function adminLogin(data) {
    return axios.post(baseUrl+`/user/adminLogin`, data)
    .then(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('data', JSON.stringify(data));
console.log("after login data cheking==>",data.data.id);
        return data;
    });
}
export function UserStatics(){
    return axios.get(baseUrl+`/user/UserStatics`,{
        headers:authHeader()

    })
}
export function getAdminUserList(){
    return axios.get(baseUrl+`/user/getAdminUserList`,{
        headers:authHeader()
    })
}
export function userCartList(){
    return axios.get(baseUrl+`/productcarts/userCartList`,{
        headers:authHeader()
    })
}
export function OrderApproval(data){
    return axios.post(baseUrl+`/productcarts/adminCompleteOrder`,data,{
        headers:authHeader()
    })
}