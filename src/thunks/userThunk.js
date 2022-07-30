import { userActions } from "../store/userslice";
export const getUsers = () => async (dispatch) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	dispatch(userActions.getUsers(users));
};
