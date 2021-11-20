import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [],
    product: []
}
export const productReducer = (state =  initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
           return {...state, products:payload};
        default:
            return state;
    }
}
export const selectedProductReuder = (state = {} ,{type,payload}) => {
    switch(type){
        case  ActionTypes.SELCETED_PRODUCTS:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { };
        default: 
            return state;
    }
}
