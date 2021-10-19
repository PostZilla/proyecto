import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import Postzibox from "./postzibox.js";
import Post from "./post.js";
import Heart from "../../img/heart.png";
import Lottie from "react-lottie";
import * as animationData from "./post.json";

function Feed() {
	const { store, actions } = useContext(Context);
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData.default,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};
	useEffect(() => {
		actions.getPosts();
	}, []);

	return (
		<div className="feed">
			<div>
				<h2>Home</h2>
			</div>

			<Postzibox />

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
						likes={value.likes}
					/>
				))}

			{!!store.post && store.post.length === 0 ? (
				<Lottie options={defaultOptions} height={300} width={300} />
			) : null}
		</div>
	);
}

export default Feed;
