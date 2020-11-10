import * as actionTypes from '../actionTypes/basket';

export const addProducts = products => dispatch => {
    dispatch({ type: actionTypes.ADD_PRODUCTS, products })
}

export const deleteProduct = pId => dispatch => {
    dispatch({ type: actionTypes.DELETE_PRODUCT, pId })
}