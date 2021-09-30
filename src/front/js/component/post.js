import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/post.scss";

function post() {
	return (
		<div className="post">
			<div className="post_avatar">
				<Avatar src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg" />
			</div>
		</div>
	);
}

export default post;
