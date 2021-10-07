import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import Feed from "../component/feed";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";
import { Context } from "../store/appContext";

export const Home = () => {
	return (
		<div className="App">
			<Sidebar />
			<Feed />
			<Widgets />
		</div>
	);
};
