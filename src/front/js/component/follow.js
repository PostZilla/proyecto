import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import ClearIcon from "@material-ui/icons/Clear";
import "../../styles/follow.scss";

function Follow(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="follower">
			@{props.username}
			<ClearIcon className="equis" onClick={() => actions.delFollow(props.userid)} />
		</div>
	);
}

Follow.propTypes = {
	username: PropTypes.string,
	userid: PropTypes.number
};
export default Follow;
