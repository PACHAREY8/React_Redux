import {userConstant} from '../Constants/userConstant'
export function ansRejection(state={},action){
    switch(action.type){
        case userConstant.ANS_REJECTION_REQUEST:
            return {ansRejection:true};
            case userConstant.ANS_REJECTION_SUCCESS:
                return{ansRejection:true,
                    data:action.data
                };
                case userConstant.ANS_REJECTION_FAILURE:
                    return{};
                    default:
                        return state

    }
}