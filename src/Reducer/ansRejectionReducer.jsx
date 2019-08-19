import {userConstant} from '../Constants/userConstant'
const initialState ={ 
    ansRejectionRes : {}
}
export function ansRejection(state={},action){
    switch(action.type){
        case userConstant.ANS_REJECTION_REQUEST:
            return {ansRejection:true};
            case userConstant.ANS_REJECTION_SUCCESS: 
            console.log("rejection data",action.data);               
                return{ansRejection:true,
                    ansRejectionRes:action.data
                };
                case userConstant.ANS_REJECTION_FAILURE:
                    return{};
                    default:
                        return state

    }
}