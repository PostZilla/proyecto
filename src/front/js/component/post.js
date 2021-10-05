import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "../../styles/post.scss";

function Post(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="post">
			<div className="post_avatar">
				<Avatar src={props.profileimg} />
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>
							{props.name} {""}
							<span className="post_headerSpecial">
								{verified && <VerifiedUserIcon className="post_badge" />}@{props.username}
							</span>
						</h3>
					</div>
					<div className="post_headerDescription">
						<p>{props.text}</p>
					</div>
				</div>
				<img src={props.img} alt="" />
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
Post.propTypes = {
	text: PropTypes.string,
	username: PropTypes.string,
	img: PropTypes.string,
	profileimg: PropTypes.string,
	name: PropTypes.string
};

export default Post;
