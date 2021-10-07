import React, { useContext } from "react";
import "../../styles/widgets.scss";
import { Context } from "../store/appContext";

export default function widgets() {
	const { store, actions } = useContext(Context);
	return (
		<div className="widgest">
			<div className="widgets_container">
				<h2>Siguiendo</h2>

				{!!store.follower &&
					store.follower.map((value, index) => {
						return (
							<li key={index}>
								@{value}
								<button onClick={() => actions.delFollower(value)}> X </button>
							</li>
						);
					})}
			</div>
		</div>
	);
}
