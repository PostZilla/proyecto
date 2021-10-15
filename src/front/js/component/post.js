import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../../styles/post.scss";
import Heart from "../../img/heart.png";

function Post(props) {
	const { store, actions } = useContext(Context);
	console.log(props);

	return (
		<>
			<div className="post">
				<div className="post_avatar">
					<Avatar className="avatar" src={props.profileimg} />
				</div>
				<div className="post_body">
					<div className="post_header">
						<div className="post_headerText">
							<h3>
								<Link to={{ pathname: props.userid, state: props.userid }}>{props.name}</Link>

								<span className="post_headerSpecial Space">@{props.username}</span>
								{!!store.user && store.user.id === props.userid ? null : store.follower_id.includes(
									props.userid
								) ? (
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
							<img
								className="likeIcon"
								src={Heart}
								onClick={() => actions.addLike(props.postid, "like")}
								alt=""
							/>
							<span className="postCounter">
								A <b>{props.likes}</b> personas les gusta esto
							</span>
							{!!store.user && store.user.id !== props.userid ? null : (
								<button
									type="button"
									onClick={() => actions.delPost(props.postid)}
									className="Space btn btn-dark btn-sm">
									Borrar
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
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
	isFollowing: PropTypes.bool,
	date: PropTypes.number,
	likes: PropTypes.number
};

export default Post;
