import "./App.css";
import CounterDisplay from "./components/counter";
import UsersList from "./components/users";
import { Routes, Route, useParams } from "react-router-dom";
import UserPage from "./components/user";
import AddUser from "./components/addUser";

function App() {
	return (
		/* 	<div className="App">
			<CounterDisplay />
			<UsersList />
		</div> */
		<Routes>
			<Route path="/" element={<CounterDisplay />}>
				<Route path="users">
					<Route index element={<UsersList />} />
					<Route path=":id" element={<UserPage />} />
					<Route path="add" element={<AddUser />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
