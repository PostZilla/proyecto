import React, { useContext } from "react";
import "../../styles/home.scss";
import { Feed } from "../component/feed";
import Sidebar from "../component/sidebar";

export const Home = () => {
	return (
		<div className="app">
			<h1 />

			<Sidebar />
			<Feed />
			{/*widgets*/}
		</div>
	);
};
