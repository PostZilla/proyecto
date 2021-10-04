import React, { useContext } from "react";
import "../../styles/home.scss";
import Feed from "../component/feed";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";

export const Home = () => {
	return (
		<div className="App">
			<Sidebar />
			<Feed />
			<Widgets />
		</div>
	);
};
