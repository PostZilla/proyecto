import React, { useContext, useDebugValue, useEffect } from "react";
import "../../styles/widgets.scss";
import Follow from "./follow";
import { Context } from "../store/appContext";

function Widgets() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFollows();
	}, []);

	return (
		<div className="widgest">
			<div className="widgets_container">
				<h2>Siguiendo</h2>
				{!!store.follower &&
					store.follower
						.reverse()
						.map((value, index) => <Follow username={value.username} userid={value.id} key={index} />)}
			</div>
		</div>
	);
}

export default Widgets;
