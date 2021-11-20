import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products) => {
    return {
        type: ActionTypes.SELCETED_PRODUCTS,
        payload: products
    }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
       
    }
}