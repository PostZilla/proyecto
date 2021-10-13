import React, { useEffect, useContext } from "react";
import "../../styles/profile.scss";
import SingleFeed from "../component/singlefeed";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";
import { Context } from "../store/appContext";

export default function profile() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPosts();
	}, []);
	return (
		<>
			<div className="App">
				<Sidebar />
				<SingleFeed />
				<Widgets />
			</div>
		</>
	);
}
