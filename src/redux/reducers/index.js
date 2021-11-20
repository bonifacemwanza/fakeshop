import { combineReducers } from "redux";
import { productReducer, selectedProductReuder } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReuder
})
export default reducers;