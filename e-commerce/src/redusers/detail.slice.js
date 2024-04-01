import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    detail : []

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

        }
    }
})

export const {loadingProduct, loadedProduct, loadedError} = DetailSlice.actions
export default DetailSlice.reducer