import { combineReducers } from "redux";

import product from './Products'
import Auth from './Auth'

const appReducer = combineReducers({
    product, Auth,
})

export default appReducer;