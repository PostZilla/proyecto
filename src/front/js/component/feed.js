import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import Postzibox from "./postzibox.js";
import Post from "./post.js";

function Feed2() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPosts();
	}, []);

	return (
		<div className="feed">
			<div>
				<h2>Home</h2>
			</div>
			<Postzibox />

			{store.post.map((value, index) => (
				<Post
					text={value.text}
					username={value.user.username}
					profileimg={value.user.profile_image_url}
					img={value.img}
					name={value.user.nameprops}
					key={index}
				/>
			))}
		</div>
	);
}

export default Feed2;
