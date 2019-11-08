const initialState = {
    dataRegister: [],
    dataLogin: [],
    isLoading: false,
    isRejected:false,
    isFulfilled:false,
};

const Auth = (state = initialState, action) => {
    switch (action.type) {
// ========== Register =========== //
        case 'REGISTER_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'REGISTER_REJECTED' :
             return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
            };
        case 'REGISTER_FULFILLED' :
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                dataRegister: action.payload,
            };
// ========== Login =========== //
        case 'LOGIN_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'LOGIN_REJECTED' :
             return{
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false,
            };
        case 'LOGIN_FULFILLED' :
            return{
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                dataLogin: action.payload,
            }
        default:
            return state;
    }
}


export default Auth;