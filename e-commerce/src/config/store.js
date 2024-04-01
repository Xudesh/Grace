import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from '../redusers/Product.slice'
import CartSlice from '../redusers/Cart.slice'
import detailSlice from '../redusers/detail.slice'

export const store = configureStore({
  reducer: {
    product: ProductSlice,
    cart: CartSlice,
    detail: detailSlice
  },
})
