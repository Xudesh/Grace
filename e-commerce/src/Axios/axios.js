import axios from "axios";
import { loadedError, loadedProduct, loadingProduct } from "../redusers/Product.slice";



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

    await axios.get(detail_url)

    .then(
        res => {
            dispatch(loadedProduct(res.data))
            console.log(res.data)
        }
    )
    
    .catch(
        err => {
            dispatch(loadedError())
        }
    )
}