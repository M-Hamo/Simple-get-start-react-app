import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import { userReducer } from "./userslice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: userReducer,
	},
});
