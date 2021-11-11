import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import ClearIcon from "@material-ui/icons/Clear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/follow.scss";

function Follow(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="follower">
			@{props.username}
			<FontAwesomeIcon
				icon={faUserTimes}
				className="equis"
				data-toggle="tooltip"
				data-placement="left"
				title="Dejar de Seguir"
				onClick={() => actions.delFollow(props.userid)}
			/>
		</div>
	);
}

Follow.propTypes = {
	username: PropTypes.string,
	userid: PropTypes.number
};
export default Follow;
