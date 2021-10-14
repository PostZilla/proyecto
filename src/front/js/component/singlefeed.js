import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";
import Jumbobox from "./jumbobox";
import SinglePosts from "./singleposts";
import { PropTypes } from "prop-types";

function SingleFeed(props) {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getSinglePost(props.user_id);
	}, []);

	return (
		<div className="feed">
			<Jumbobox />
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
						key={index}
					/>
				))}
		</div>
	);
}
SingleFeed.propTypes = {
	user_id: PropTypes.string
};
export default SingleFeed;
