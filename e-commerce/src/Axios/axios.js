import axios from "axios";
import { loadedError, loadedProduct, loadingProduct } from "../redusers/Product.slice";
import { useState } from "react";



export async function getProduct(url, dispatch) {
    dispatch(loadingProduct())

    await axios.get(url)

    .then(
        res => {
            dispatch(loadedProduct(res.data))
        }
    )
    
    .catch(
        err => {
            dispatch(loadedError())
        }
    )
}


