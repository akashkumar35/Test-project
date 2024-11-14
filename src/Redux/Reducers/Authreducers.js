import { ActionTypes } from "../Actions/Actiontypes";


const INITIAL_STATE = {
    token:{},
    data:null,
    is_login: false,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER:
            return {
                ...state,
                token:action.payload,
                is_login: true,
            };
            case ActionTypes.CUSTOMER_LIST_DETAILS:
                return {
                    ...state,
                    data:action.payload,
                   
                };

            case ActionTypes.LOGOUT_USER:
                return{
                    ...state,
                    token:{},
                    is_login:false,
                };
        
        default:
            return state;
    }
};
