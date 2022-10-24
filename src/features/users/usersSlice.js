import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   { id: '1', name: "Johnny" },
   { id: '2', name: "Tamara" },
   { id: '3', name: "Gamorah" },
];

const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
