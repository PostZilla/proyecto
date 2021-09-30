import React, { useContext } from "react";
import "../../styles/home.scss";
import Feed from "../component/feed";
import Feed2 from "../component/feed2";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";

export const Home = () => {
	return (
		<>
			<Sidebar />
			<Feed />
			<Widgets />
		</>
	);
};
