const initialState = {
    dataRegister: [],
    isLoading: false,
    isRejected:false,
    isFulfilled:false,
};

const Auth = (state = initialState, action) => {
    switch (action.type) {
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
            }
        default:
            return state;
    }
}


export default Auth;