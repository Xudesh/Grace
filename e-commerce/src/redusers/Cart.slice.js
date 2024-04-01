import{ createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    countCartItem: [],
    price: 0
}


const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem(state, action){
            if(state.cart.find(item => item.id == action.payload.id)) {
                state.countCartItem = [{id : action.payload.id}, ...state.countCartItem]
            }
            else{
                state.cart = [action.payload, ...state.cart]
                state.countCartItem = [{id : action.payload.id, price : action.payload.price}, ...state.countCartItem]
            }

            state.price += action.payload.price
        },

        deleteCartItem(state, action){
            const count = state.countCartItem.filter(item => item.id === action.payload.id).length
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
            state.countCartItem = state.countCartItem.filter(item => item.id !== action.payload.id)
            state.price -= action.payload.price*count
        },

        minusCartItem(state, action) {
            const index = state.countCartItem.findIndex(item => item.id === action.payload.id)
            state.countCartItem.splice(index, 1)

            state.price -= action.payload.price


        }
    }
})


export const {setCartItem, deleteCartItem, minusCartItem} =  CartSlice.actions
export default CartSlice.reducer