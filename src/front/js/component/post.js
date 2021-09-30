import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import "../../styles/post.scss";

function post() {
	return (
		<div className="post">
			<div className="post_avatar">
				<Avatar src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg" />
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>
							Bryan Andres {""}
							<span className="post_headerSpecial">
								<VerifiedUserIcon className="post_badge" />
							</span>
						</h3>
					</div>
					<div className="post_headerDescrription">
						<p>Texto de prueba para el post de Postzilla</p>
					</div>
				</div>
				<img src="https://media2.giphy.com/media/13G7hmmFr9yuxG/giphy.gif" alt="" />
				<div className="post_footer">
					<ChatBubbleOutlineIcon fontSize="small" />
					<RepeatIcon fontSize="small" />
					<FavoriteBorderIcon fontSize="small" />
					<PublishIcon fontSize="small" />
				</div>
			</div>
		</div>
	);
}

export default post;
