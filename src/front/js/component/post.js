import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../../styles/post.scss";
import Heart from "../../img/heart.png";
import DateTime from "react-router-dom";

function Post(props) {
	const { store, actions } = useContext(Context);
	let heart = store.likes.find((value, index) => {
		return value == props.postid;
	});
	console.log(props);

	const [like, setLike] = useState(0);
	const [isLike, setIsLike] = useState(false);

	const likeHandle = () => {
		setLike(isLike ? like - 1 : like + 1);
	};

	return (
		<div className="post">
			<div className="post_avatar">
				<Link to={{ pathname: `${props.userid}`, state: props.userid }}>
					<Avatar className="avatar" src={props.profileimg} />
				</Link>
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>
							<Link to={{ pathname: `${props.userid}`, state: props.userid }}>{props.name}</Link>

							<span className="post_headerSpecial Space">@{props.username}</span>
							<DateTime className="postDate" />
							{false ? (
								<button className="btn btn-danger" onClick={() => actions.delFollow(props.userid)}>
									Dejar de Seguir
								</button>
							) : (
								<button
									type="button"
									className="buttonFollow"
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
					<div className="postBottomLeft">
						<img className="likeIcon" src={Heart} onClick={likeHandle} alt="" />
						<span className="postCounter">
							A <b>{like}</b> personas les gusta esto
						</span>
					</div>
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
