import axios from 'axios';
const baseUrl="http://34.213.106.173/api"
function AdminRegister(data) {
    return axios.post(baseUrl+`/user/adminSignUp`, data)
}

function adminLogin(data) {
    return axios.post(baseUrl+`/user/adminLogin`, data)
}
function userForgot(data) {
    return axios.post(baseUrl+`/forgot`, data)
}
export {AdminRegister,adminLogin,userForgot}