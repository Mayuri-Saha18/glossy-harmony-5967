// import axios from "axios";
// import {
//   ALL_PRODUCT_FAIL,
//   ALL_PRODUCT_REQUEST,
//   ALL_PRODUCT_SUCCESS,
//   CLEAR_ERRORS,
// } from "./product_types";

// export const getProduct =
//   (currentPage = 1, price, brand) =>
//   async (dispatch) => {
//     try {
//       dispatch({ type: ALL_PRODUCT_REQUEST });
//       const { data } = await axios.get(
//         `http://localhost:8080/sofas`
//       );
//       console.log("success:",data)
//       dispatch({
//         type: ALL_PRODUCT_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       console.log("error",error);
//       dispatch({
//         type: ALL_PRODUCT_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };

// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERRORS });
// };

import axios from "axios"
import * as types from "./product_types";

export const getProduct = (params) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST });

    return axios
        .get(`http://localhost:8080/sofasa`, params)
        .then((res) => {
            console.log("success:",res.data)
            dispatch({ type: types.GET_DATA_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            console.log('error')
            dispatch({ type: types.GET_DATA_FAILURE })
        })
}

export const addToCart = (payload) => (dispatch) => {
    dispatch({ type: types.ADD_TO_CART_REQUEST });

    return axios
        .post(`http://localhost:8000/addtocart`, payload)
        .then((res) => {
            console.log("cart:",res.data)
            dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: types.ADD_TO_CART_FAILURE })
        })
}
