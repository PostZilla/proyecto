import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import Jumbobox from "./jumbobox";
import SinglePosts from "./singleposts";

function SingleFeed() {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPosts();
	}, []);

	return (
		<div className="feed">
			<Jumbobox />
			{!!store.post &&
				store.post.map((value, index) => (
					<SinglePosts
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

export default SingleFeed;
