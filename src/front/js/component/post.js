import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";
import "../../styles/post.scss";

function Post(props) {
	const { store, actions } = useContext(Context);
	let heart = store.likes.find((value, index) => {
		return value == props.postid;
	});
	return (
		<div className="post">
			<div className="post_avatar">
				<Link to={{ pathname: `/username/${props.id}`, state: props.id }}>
					<Avatar src={props.profileimg} />
				</Link>
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>
							<Link to={{ pathname: `/username/${props.userid}`, state: props.userid }}>{props.name}</Link>

							<span className="post_headerSpecial Space">@{props.username}</span>
							{!store.myFollower ? (
								<button
									type="button"
									className="btn btn-light"
									onClick={() => actions.addFollower(props.username)}>
									Seguir
								</button>
							) : (
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => actions.delFollower(props.username)}>
									Dejar de Seguir
								</button>
							)}
						</h3>
					</div>
					<div className="post_headerDescription">
						<p>{props.text}</p>
					</div>
				</div>
				<div className="imgbox">
					<img className="postimg" src={props.img} alt="" />
				</div>
				<div className="post_footer">
					<ChatBubbleOutlineIcon fontSize="small" />
					<FavoriteBorderIcon fontSize="small"onClick={() =>
							heart == undefined ? props.addLike(props.postid) : props.deleteLike(props.postid)
						}></FavoriteBorderIcon>
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
	name: PropTypes.string,
	userid: PropTypes.number,
	postid: PropTypes.number,
	addLike: PropTypes.func,
	deleteLike: PropTypes.func
	
};

export default Post;
