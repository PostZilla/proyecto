import React from "react";
import "../../styles/sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faDragon, faEllipsisH, faEnvelope, faListAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PostZilla from "../../img/PostZilla.png";
import PropTypes from "prop-types";

function Sidebar(props) {
	return (
		<div className="sidebar">
			<div className="Postzilla_icon">
				<img src={PostZilla} width="80" height="70" color="blue" />
			</div>
			<Link to={"/home"}>
				<div className="Home">
					<FontAwesomeIcon icon={faHome} /> <div className="Space">Home</div>
				</div>
			</Link>
			<div className="Profile">
				<Link to={{ pathname: `${props.userid}`, state: props.userid }}>
					<FontAwesomeIcon icon={faUser} /> <div className="Space">Profile</div>
				</Link>
			</div>
		</div>
	);
}
Sidebar.propTypes = {
	userid: PropTypes.number
};

export default Sidebar;
