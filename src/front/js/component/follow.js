import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Follow(props) {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Link to={{ pathname: `${props.userid}`, state: props.userid }}>@{props.username}</Link>
			<button type="button" className="btn btn-light" onClick={() => actions.delFollow(props.userid)}>
				x
			</button>
		</div>
	);
}

Follow.propTypes = {
	username: PropTypes.string,
	userid: PropTypes.number
};
export default Follow;
