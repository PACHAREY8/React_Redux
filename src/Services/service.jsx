import axios from 'axios';
const baseUrl="http://34.213.106.173/api"
function AdminRegister(data) {
    return axios.post(baseUrl+`/user/adminSignUp`, data)
}
function userLogin(data) {
    return axios.post(baseUrl+`/user/login`, data)
}
function userForgot(data) {
    return axios.post(baseUrl+`/forgot`, data)
}
export {AdminRegister,userLogin,userForgot}