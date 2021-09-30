import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import React from "react";
import "../../styles/post.scss";

function post() {
	return (
		<div className="post">
			<div className="post_avatar">
				<Avatar src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg" />
			</div>
			<div className="post_body" />
			<div className="post_header" />
			<div className="post_headerText" />
			<h3>
				Bryan Andres {""}
				<span>
					<VerifiedUserIcon />
				</span>
			</h3>
		</div>
	);
}

export default post;
