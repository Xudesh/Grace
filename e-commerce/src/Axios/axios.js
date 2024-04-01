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


export async function getDetail(detail_url, dispatch) {
    
    
    dispatch(loadingProduct())
    const [detail, setDetail] = useState({})

    await axios.get(detail_url)

    .then(
        res => {
            dispatch(loadedProduct(res.data))
            console.log(res.data)
            setDetail(res.data)
        }
    )
    
    .catch(
        err => {
            dispatch(loadedError())
        }
    )
}