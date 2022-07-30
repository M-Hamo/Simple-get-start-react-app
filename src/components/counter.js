import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import { NavLink, Outlet } from "react-router-dom";
const CounterDisplay = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.value);

	const increase = () => {
		dispatch(counterActions.increment());
	};
	const decrease = () => {
		dispatch(counterActions.decrement());
	};
	let activeStyle = {
		textDecoration: "underline",
		color: "red",
	};
	return (
		<div>
			<p>Hello from counter</p>
			<h3>{count}</h3>
			<button onClick={increase}> + </button>
			<button onClick={decrease}> - </button>
			<NavLink
				to="users"
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
			>
				users
			</NavLink>
			<Outlet />
		</div>
	);
};

export default CounterDisplay;
