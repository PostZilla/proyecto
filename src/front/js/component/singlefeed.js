import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import Jumbobox from "./jumbobox";
import SinglePosts from "./singleposts";
import { PropTypes } from "prop-types";
import Lottie from "react-lottie";
import * as animationData from "./post.json";
function SingleFeed(props) {
	const { store, actions } = useContext(Context);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData.default,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice"
		}
	};
	useEffect(() => {
		actions.getSinglePost(props.user_id);
		actions.getUserbyID(props.userby_id);
	}, []);

	return (
		<div className="feed">
			{!!store.userbyid &&
				store.userbyid.map((value, index) => (
					<Jumbobox profileimg={value.profile_image_url} name={value.name} key={index} />
				))}

			{!!store.singlePost &&
				store.singlePost.map((value, index) => (
					<SinglePosts
						text={value.text}
						username={value.user.username}
						profileimg={value.user.profile_image_url}
						img={value.img}
						name={value.user.name}
						userid={value.user.id}
						postid={value.id}
						likes={value.likes}
						key={index}
					/>
				))}

			{!!store.singlePost && store.singlePost.length === 0 ? (
				<>
					<h3 className="text">¡Nada por aquí!</h3>
					<Lottie options={defaultOptions} height={300} width={300} />
				</>
			) : null}
		</div>
	);
}
SingleFeed.propTypes = {
	user_id: PropTypes.string,
	userby_id: PropTypes.number
};

export default SingleFeed;
