import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [],
};

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		getUsers: (state, action) => {
			state.users = action.payload;
		},
		addUser: (state, action) => {
			state.users = [...state.users, action.payload];
		},
	},
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
