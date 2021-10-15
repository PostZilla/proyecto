import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import Feed from "../component/feed";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	useEffect(
		() => {
			if (store.isAuthenticate == false) {
				history.goBack();
				alert("Vuelve a iniciar sesion");
			}
		},
		[store.isAuthenticate]
	),
		useEffect(() => {
			actions.getUser();
		}, []);

	return (
		<div className="App">
			<Sidebar />
			<Feed />
			<Widgets />
		</div>
	);
};
