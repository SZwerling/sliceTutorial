import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
   {
      id: "1",
      title: "Learning Redux Toolkit",
      content: "I've heard good things...",
      date: sub(new Date(), {minutes: 10}).toISOString(),
      reactions: {
         thumbsUp: 0,
         wow: 0,
         heart: 0,
         rocket: 0,
         coffee: 0
      }
   },
   {
      id: "2",
      title: "slices...",
      content: "Slicing and dicing with slices is nices.",
      date: sub(new Date(), {minutes: 5}).toISOString(),
      reactions: {
         thumbsUp: 0,
         wow: 0,
         heart: 0,
         rocket: 0,
         coffee: 0
      }
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
                  userId,
                  reactions: {
                     thumbsUp: 0,
                     wow: 0,
                     heart: 0,
                     rocket: 0,
                     coffee: 0
                  }
               },
            };
         },
      },
      reactionAdded(state, action){
         const { postId, reaction } = action.payload
         const existingPost = state.find((post) => post.id === postId)
         if (existingPost) {
            existingPost.reactions[reaction]++  // we can do this in createSlice, normally would mutate state
         }
      }
   },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;
