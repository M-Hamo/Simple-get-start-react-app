import { Routes, Route, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const UserPage = () => {
	const { id } = useParams();
	const { users } = useSelector((store) => store.users);
	const user = users.find((user) => user.id == id);
	return (
		<>
			<p>you are in user page {user.name}</p>
		</>
	);
};

export default UserPage;
