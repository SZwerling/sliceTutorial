import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things..."},
    {id: '2', title: 'slices...', content: "Slicing and dicing with slices is nices."}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;