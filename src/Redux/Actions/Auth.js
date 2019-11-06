import Axios from "axios"

export const Register = (data) => {
    return {
        type : 'REGISTER',
        payload : Axios.post('http://localhost:5000/user/register', data)
    };
};
