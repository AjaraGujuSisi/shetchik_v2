import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    dataPosts: null,
}

export const getPostsDataAsync = createAsyncThunk(
    'getPostsData',
    async (id,{dispatch}) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
        const data = await response.json()
        dispatch(addPost(data))
    }
)
const dataPostsSlice = createSlice({
    name: "dataPostsSlice",
    initialState,
    reducers:{
        addPost: (state, action) => {
            state.dataPosts = action.payload
        }
    }
})
export const {addPost} = dataPostsSlice.actions;
export default dataPostsSlice.reducer