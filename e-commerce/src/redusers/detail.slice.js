import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    detail : [],
    selectedProduct: [],
}


const DetailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers : {
        loadingProduct(state) {
            state.isLoading = true
        },

        loadedProduct(state, action) {
            state.isLoading = false
            state.detail = action.payload
        },

        loadedError(state) {
            state.isLoading = false
            console.log(state.detail)
        },

        setSelectedProduct(state, action) {
            state.selectedProduct = action.payload;
          },
    }
})

export const {loadingProduct, loadedProduct, loadedError, setSelectedProduct} = DetailSlice.actions
export default DetailSlice.reducer