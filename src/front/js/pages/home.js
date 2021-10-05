import React, { useContext } from "react";
import "../../styles/home.scss";
import Feed from "../component/feed";
import Sidebar from "../component/sidebar";
import Rightbar from "../component/rightbar";

export const Home = () => {
	return (
		<div className="App">
			<Sidebar />
			<Feed />
			<Rightbar />
		</div>
	);
};
