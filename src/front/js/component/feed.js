import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import Postzibox from "./postzibox.js";
import Post from "./post.js";

function Feed() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPosts();
		actions.getUser();
	}, []);

	return (
		<div className="feed">
			<div>
				<h2>Home</h2>
			</div>
			{!!store.user &&
				store.user.map((value, index) => (
					<Postzibox userid={value.user.id} profileimg={value.user.profile_image_url} key={index} />
				))}

			{!!store.post &&
				store.post.map((value, index) => (
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
