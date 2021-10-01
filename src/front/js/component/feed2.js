import React from "react";
import "../../styles/feed2.scss";
import Postzibox from "./postzibox.js";
import Post from "./post.js";

function feed2() {
	return (
		<div className="feed">
			<div className="feed_header">
				<h2>Home</h2>
			</div>
			<Postzibox />
			<Post
				displayName="Bryan Andres"
				username="Bryanndres"
				verified={true}
				text="esta funcionando"
				avatar="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg"
				image="https://media2.giphy.com/media/13G7hmmFr9yuxG/giphy.gif"
			/>
		</div>
	);
}

export default feed2;
