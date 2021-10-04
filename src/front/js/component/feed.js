import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import "../../styles/feed2.scss";
import Postzibox from "./postzibox.js";
import Post from "./post.js";
import db from "./firebase";

function feed() {
	const [posts, setPosts] = useState([]);
	async function getPost(db) {
		const citiesCol = collection(db, "post");
		const citySnapshot = await getDocs(citiesCol);
		const cityList = citySnapshot.docs.map(doc => doc.data());
		console.log(cityList);
		setPosts(cityList);
		return cityList;
	}
	useEffect(
		() => {
			getPost(db);
		},

		[]
	);

	return (
		<div className="feed">
			<div className="feed_header">
				<h2>Home</h2>
			</div>
			<Postzibox />
			{posts.map(post => (
				<Post
					key={post.text}
					displayName={post.displayName}
					username={post.username}
					verified={post.verified}
					text={post.text}
					avatar={post.avatar}
					image={post.image}
				/>
			))}
		</div>
	);
}

export default feed;
