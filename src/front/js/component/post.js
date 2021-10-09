import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";
import "../../styles/post.scss";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import VerifiedUser from "@material-ui/icons/VerifiedUser";

function Post(props) {
	const { store, actions } = useContext(Context);
	let heart = store.likes.find((value, index) => {
		return value == props.postid;
	});
	console.log(props);
	return (
		<div className="post">
			<div className="post_avatar">
				<Link to={{ pathname: `${props.userid}`, state: props.userid }}>
					<Avatar src={props.profileimg} />
				</Link>
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>
							<Link to={{ pathname: `${props.userid}`, state: props.userid }}>{props.name}</Link>

							<span className="post_headerSpecial Space">@{props.username}</span>
							{false ? (
								<button className="btn btn-danger" onClick={() => actions.delFollow(props.userid)}>
									Dejar de Seguir
								</button>
							) : (
								<button
									type="button"
									className="btn btn-light"
									onClick={() => actions.addFollower(props.userid)}>
									Seguir
								</button>
							)}
						</h3>
					</div>
					<div className="post_headerDescription">
						<p>{props.text}</p>
					</div>
				</div>
				{props.img != "" ? (
					<div className="imgbox">
						<img className="postimg" src={props.img} alt="" />
					</div>
				) : (
					<div />
				)}

				<div className="post_footer">
					<ChatBubbleOutlineIcon fontSize="small" />
					<FavoriteBorderIcon className="favorite" onClick={() => actions.addLike(props.postid)} />
				</div>
			</div>
		</div>
	);
}
Post.propTypes = {
	id: PropTypes.number,
	text: PropTypes.string,
	username: PropTypes.string,
	img: PropTypes.string,
	profileimg: PropTypes.string,
	name: PropTypes.string,
	userid: PropTypes.number,
	postid: PropTypes.number,
	isFollowing: PropTypes.bool
};

export default Post;
