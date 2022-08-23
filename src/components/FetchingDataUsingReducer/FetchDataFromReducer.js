import React, {useState, useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: false,
    post: [],
    error: ''
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case "FETCH_FAILURE":
            return {
                loading: false,
                post: [],
                error: action.payload
            }
        default:
            return state;
    }
}

const FetchDataFromReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            dispatch({type: "FETCH_SUCCESS", payload: response.data});
          })
          .catch((err) => {
            dispatch({type: "FETCH_ERROR", payload: err});
          })

    })
    return (
        <>
            {state?.post?.map(post => <div key={post.id}>{post.body}</div>)}
        </>
    );
};

export default FetchDataFromReducer;