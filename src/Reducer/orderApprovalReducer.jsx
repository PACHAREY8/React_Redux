import { userConstant } from '../Constants/userConstant'
export function orderApproval(state = {}, action) {
    switch (action.type) {
        case userConstant.ORDER_APPROVAL_REQUEST:
            return { Approval: true };
        case userConstant.ORDER_APPROVAL_SUCCESS:
            return {
                Approval: true,
                data: action.data
            };
            case userConstant.ORDER_APPROVAL_FAILURE:
                return{};
                default:
                    return state
    }
}