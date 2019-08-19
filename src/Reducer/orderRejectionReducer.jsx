import {userConstant} from '../Constants/userConstant'
export function orderRejection(state={},action){
    switch(action.type){
        case userConstant.ORDER_REJECTION_REQUEST:
            return {isRejected:true};
            case userConstant.ORDER_REJECTION_SUCCESS:
                return {isRejected:true,
                    orderRejection:action.data
                };
                case userConstant.ORDER_REJECTION_FAILUER:
                    return{};
                    default:
                        return state
    }
}