import Axios from "axios"


export const getProducts = (input) => {
    return {
        type : 'GET_PRODUCT',
        payload : Axios.get('http://192.168.100.132:5000/product',{params : input })
    };
};

export const postProducts = (data) => {
    console.log(data);
    
    return {
        type : 'POST_PRODUCT',
        payload : Axios.post('http://192.168.100.132:5000/product', data)
    };
};


export const deleteProduct = (id) => {
    return {
        type : 'DELETE_PRODUCT',
        payload : Axios.delete(`http://192.168.100.132:5000/product/${id}`)
    };
};

export const updateProducts = (product) => {
    return {
        type : 'UPDATE_PRODUCT',
        payload : Axios.put(`http://192.168.100.132:5000/product/${product.id}`, product)
    };
};