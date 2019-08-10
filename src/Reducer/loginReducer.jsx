import { userConstant } from "../Constants/userConstant";
let data = JSON.parse(localStorage.getItem('data'))
const initialState = data ? { signIn: true, data } : {};
export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case userConstant.LOGIN_REQUEST:
            return {
                signIn: true,
                data: action.data
            };
        case userConstant.LOGIN_SUCCESS:
            return {
                signIn: true,
                data: action.data
            };
        case userConstant.LOGIN_FAILURE:
            return {};
        default:
            return state
    }
}