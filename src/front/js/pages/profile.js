import React, { useEffect, useContext } from "react";
import "../../styles/profile.scss";
import SingleFeed from "../component/singlefeed";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export default function profile() {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	console.log(theid);
	useEffect(() => {
		actions.getPosts();
		actions.getSinglePost();
	}, []);
	return (
		<>
			<div className="App">
				<Sidebar />
				<SingleFeed user_id={theid} />
				<Widgets />
			</div>
		</>
	);
}
