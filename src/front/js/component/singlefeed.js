import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
import "../../styles/post.scss";

function SinglePost(props) {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getSinglePost();
	}, []);

	return (
		<div className="profile">
			<div className="profileRight">
				<div className="profileRightTop">
					<div className="profileCover">
						<img
							className="profileCoverImg"
							src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg"
							alt=""
						/>
						<img
							className="profileUserImg"
							src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg"
							alt=""
						/>
					</div>
					<div className="profileInfo">
						<h4 className="profileInfoName">4Geeks</h4>
						<span className="profileInfoDescription">Hola 4Geeks</span>
					</div>
				</div>
				<div className="profileRightBottom" />
			</div>
			<div className="post">
				<div className="post_avatar">
					<Link to={{ pathname: `/username/${props.userid}`, state: props.userid }}>
						<Avatar src={props.profileimg} />
					</Link>
				</div>
				<div className="post_body">
					<div className="post_header">
						<div className="post_headerText">
							<h3>
								<Link to={{ pathname: `${props.userid}`, state: props.userid }}>{props.name}</Link>

								<span className="post_headerSpecial Space">@{props.username}</span>
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
						<FavoriteBorderIcon className="favorite" onClick={() => actions.addLike(props.postid)} />
					</div>
				</div>
			</div>
		</div>
	);
}
SinglePost.propTypes = {
	id: PropTypes.number,
	text: PropTypes.string,
	username: PropTypes.string,
	img: PropTypes.string,
	profileimg: PropTypes.string,
	name: PropTypes.string,
	userid: PropTypes.number,
	postid: PropTypes.number
};

export default SinglePost;
