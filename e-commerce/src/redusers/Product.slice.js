import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    products: [],

}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers : {
        loadingProduct(state) {
            state.isLoading = true
        },

        loadedProduct(state, action) {
            state.isLoading = false
            state.products = action.payload
        },

        loadedError(state) {
            state.isLoading = false
        },


    }
})

export const {loadingProduct, loadedProduct, loadedError} = ProductSlice.actions
export default ProductSlice.reducer