import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 showModal: false
}
// console.log(initialModal);

const modalReducer = createSlice({
 name: 'modal',
 initialState,
 reducers: {
  openModal: (state, action)=>{
   state.showModal = true
  },
  closeModal: (state, action)=>{
   state.showModal = false
  }
 }
})
console.log(modalReducer);
export const {openModal,  closeModal} = modalReducer.actions
export default modalReducer.reducer