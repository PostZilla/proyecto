import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import Postzibox from "./postzibox.js";
import Post from "./post.js";

function Feed() {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			actions.getPosts();
		},
		[store.post]
	);

	return (
		<div className="feed">
			<div>
				<h2>Home</h2>
			</div>
			<Postzibox />

			{!!store.post &&
				store.post
					.reverse()
					.map((value, index) => (
						<Post
							text={value.text}
							username={value.user.username}
							profileimg={value.user.profile_image_url}
							img={value.img}
							name={value.user.name}
							userid={value.user.id}
							postid={value.id}
							key={index}
						/>
					))}
		</div>
	);
}

export default Feed;
