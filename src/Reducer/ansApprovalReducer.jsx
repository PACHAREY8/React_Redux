import {userConstant} from '../Constants/userConstant'
export function ansApproval(state={},action){
    switch(action.type){
        case userConstant.ANS_APPROVAL_REQUEST:
            return {ansApproval:true};
            case userConstant.ANS_APPROVAL_SUCCESS:
                return {
                    ansApproval:true,
                    data:action.data
                };
                case userConstant.ANS_APPROVAL_FAILURE:
                    return {};
                    default:
                        return state
    }
}