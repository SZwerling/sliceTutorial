import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
   {
      id: "1",
      title: "Learning Redux Toolkit",
      content: "I've heard good things...",
      date: sub(new Date(), {minutes: 10}).toISOString()
   },
   {
      id: "2",
      title: "slices...",
      content: "Slicing and dicing with slices is nices.",
      date: sub(new Date(), {minutes: 5}).toISOString()
   },
];

const postSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {
      postAdded: {
         reducer(state, action) {
            state.push(action.payload); // looks like it mutates, but does not // uses "immerjs" to create new state under the hood  // .push only works inside of slice
         },
         prepare(title, content, userId) {
            return {
               payload: {
                  id: nanoid(),
                  title,
                  content,
                  date: new Date().toISOString(),
                  userId
               },
            };
         },
      },
   },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
