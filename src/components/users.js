import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../thunks/userThunk";
import { Link, Outlet } from "react-router-dom";
import * as React from "react";
const UsersList = () => {
	const dispatch = useDispatch();
	const { users } = useSelector((state) => state.users);
	useEffect(() => {
		console.log("ssssss");
		dispatch(getUsers());
	}, [dispatch]);
	return (
		<div>
			{users.length ? (
				users.map((user) => (
					<div key={user.id}>
						<Link to={`${user.id}`}>{user.name}</Link>
						<br></br>
					</div>
				))
			) : (
				<></>
			)}

			<Outlet />
		</div>
	);
};

export default UsersList;
