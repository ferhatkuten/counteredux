import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload ? action.payload : 1
        },        
    }
})

export const { increment} = counterSlice.actions
export const count = (state) => state.counter.count;
export default counterSlice.reducer