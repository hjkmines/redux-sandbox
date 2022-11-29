import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter', 
    initialState, 
    reducers: {
        increment: (state) => {
            state.value++
        }, 
        decrement: (state) => {
            state.value--
        }
    }
})

// action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer; 