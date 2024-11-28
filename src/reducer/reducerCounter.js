import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSliceReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment:(state, action) => {
            state.count += action.payload;
        },
        decrement:(state, action) => {
            state.count -= action.payload;
        },
        incrementMega:(state, action) => {
            state.count += action.payload;
        },
        decrementMega:(state, action) => {
            state.count -= action.payload;
        },
        reset:(state) => {
            state.count = 0
        }

    }
})

export const {increment, decrement, decrementMega, incrementMega, reset} = counterSliceReducer.actions;
export default counterSliceReducer.reducer