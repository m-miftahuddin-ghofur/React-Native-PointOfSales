import Axios from "axios"

export const Register = (data) => {
    return {
        type : 'REGISTER',
        payload : Axios.post('http://192.168.100.132:5000/user/register', data)
    };
};

export const Login = (data) => {
    return {
        type : 'LOGIN',
        payload : Axios.post('http://192.168.100.132:5000/user/login', data)
    };
};
