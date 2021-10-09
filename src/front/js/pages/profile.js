import React, { useEffect, useContext } from "react";
import "../../styles/profile.scss";
import SingleFeed from "../component/singlefeed";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";
import { Context } from "../store/appContext";

export default function profile() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getSinglePost();
	}, []);
	return (
		<>
			<div className="profile">
				<Sidebar />
				{!!store.singlePost &&
					store.singlePost
						.reverse()
						.map((value, index) => (
							<SingleFeed
								text={value.text}
								username={value.user.username}
								profileimg={value.user.profile_image_url}
								img={value.img}
								name={value.user.name}
								userid={value.user.id}
								postid={value.id}
								key={index}
							/>
						))}{" "}
				<Widgets />
			</div>
		</>
	);
}
