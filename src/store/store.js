import { configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from "../reducer/reducerCounter";
import dataPostsSlice from "../reducer/reducerAsyncDataPosts";
const store = configureStore({
    reducer:{
        counterSliceReducer,
        dataPostsSlice
    }
});
export default store