import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";

function Follow(props) {
	const { store, actions } = useContext(Context);

	return (
		<div>
			@{props.username}
			<button onClick={() => actions.delFollow()}>X</button>
		</div>
	);
}
Follow.propTypes = {
	username: PropTypes.string
};
export default Follow;
