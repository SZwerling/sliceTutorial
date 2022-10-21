import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things..."},
    {id: '2', title: 'slices...', content: "Slicing and dicing with slices is nices."}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action){      // .push only works inside of slice
            state.push(action.payload) // looks like it mutates, but does not
        }                              // uses "immerjs" to create new state under the hood
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;