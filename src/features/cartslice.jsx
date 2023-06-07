import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
import axios from 'axios'
const url = 'https://course-api.com/react-useReducer-cart-project'
export const getCartItems = createAsyncThunk('cart/content', async (name, thunkAPI)=>{
 try {
  const resp = await axios(url)
  return resp.data
 } catch (error) {
  return thunkAPI.rejectWithValue('Something Went Wrong') ;
 }
}
) 

const initialState = {
 cart: [],
 total: 0,
 amount: 0,
 isLoading: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = []
    },
    remove: (state, action) => {
      const itemId = action.payload
      state.cart = state.cart.filter((item) => itemId !== item.id)
    },
    increase: (state, action) => {
      const itemId = action.payload
      const cartItem = state.cart.find((item) => itemId === item.id)
      cartItem.amount = cartItem.amount + 1
      console.log(cartItem.amount)
    },
    decrease: (state, action) => {
      const itemId = action.payload
      const cartItem = state.cart.find((item) => itemId === item.id)
     cartItem.amount = cartItem.amount - 1
      console.log(cartItem.amount)
    },
    calculateTotal: (state)=>{
     let amount = 0;
     let total = 0;
     state.cart.forEach((item)=> {
      amount += item.amount;
      total += item.price * item.amount
     })
     state.amount = amount;
     state.total = total;
    }
  },
  extraReducers:{
   [getCartItems.pending]: (state, action)=>{
    state.isLoading = true
   },
   [getCartItems.fulfilled]: (state, action)=>{
    state.isLoading = false;
    state.cart = action.payload
   },
   [getCartItems.rejected]: (state, action)=>{
    state.isLoading = false;
    console.log(action.payload)
   }
  }
})
// console.log(cartSlice);
export const {clearCart, remove, increase, decrease, calculateTotal} =  cartSlice.actions
export default cartSlice.reducer