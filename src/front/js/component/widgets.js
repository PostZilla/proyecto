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

				{store.follower.map((value, index) => {
					return (
						<li key={index} className="dropdown-item">
							@{value}
							<i className="fas fa-trash  float-right" onClick={() => actions.delFollower(value)} />
						</li>
					);
				})}
			</div>
		</div>
	);
}
