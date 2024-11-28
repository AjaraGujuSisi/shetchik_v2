import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementMega, decrementMega, reset } from "./reducer/reducerCounter";
import { getPostsDataAsync } from "./reducer/reducerAsyncDataPosts";

const App = () => {
    const { count } = useSelector((state) => state.counterSliceReducer);
    const { dataPosts } = useSelector((state) => state.dataPostsSlice);

    const dispatch = useDispatch();

    const minus = () => {
        if (count > 0) {
            dispatch(decrement(1));
        }
    };

    const plus = () => {
        dispatch(increment(1));
    };

    const plusMega = () => {
        dispatch(incrementMega(10));
    };

    const minusMega = () => {
        if (count > 10) {
            dispatch(decrementMega(10));
        }
    };

    useEffect(() => {
        dispatch(getPostsDataAsync());
    }, []);
    console.log(dataPosts)
    return (
        <div>
            <button onClick={minus}>-</button>
            <button onClick={minusMega}>- -</button>
            <span>{count}</span>
            <button onClick={plus}>+</button>
            <button onClick={plusMega}>+ +</button>
            <button onClick={() => dispatch(reset())}>Null</button>
            <div>
                {
                    dataPosts?(
                        dataPosts.map((post) => (
                            <div key={post.id}>
                                <h2>{post.title}</h2>
                                <span>{post.id}</span>
                                <p>{post.description}</p>
                            </div>
                        ))
                    ):(
                        <span>NOT DATE</span>
                    )
                }
            </div>
        </div>
    );
};

export default App;
