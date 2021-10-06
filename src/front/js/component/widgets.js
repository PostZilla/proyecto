import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../../styles/widgets.scss";
import { Context } from "../store/appContext";

export default function widgets() {
	const { store, actions } = useContext(Context);
	return (
		<div className="widgest">
			<div className="widgets_input">
				<SearchIcon className="search_widgetsIcon" />
				<input placeholder="Search Postzilla" type="text" />
			</div>

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
