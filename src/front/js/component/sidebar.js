import React from "react";
import "../../styles/sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faDragon, faEllipsisH, faEnvelope, faListAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
	return (
		<div className="sidebar">
			<FontAwesomeIcon icon={faDragon} />
			<div className="Home">
				<FontAwesomeIcon icon={faHome} /> <div className="Space">Home</div>
			</div>
			<div className="Explore">
				<FontAwesomeIcon icon={faSearch} /> <div className="Space">Explore</div>
			</div>
			<div className="Notification">
				<FontAwesomeIcon icon={faBell} /> <div className="Space">Notification</div>
			</div>
			<div className="Messages">
				<FontAwesomeIcon icon={faEnvelope} /> <div className="Space">Messages</div>
			</div>
			<div className="Bookmark">
				<FontAwesomeIcon icon={faBookmark} /> <div className="Space">Bookmark</div>
			</div>
			<div className="List">
				<FontAwesomeIcon icon={faListAlt} /> <div className="Space">List</div>
			</div>
			<div className="Profile">
				<FontAwesomeIcon icon={faUser} /> <div className="Space">Profile</div>
			</div>
			<div className="More">
				<FontAwesomeIcon icon={faEllipsisH} /> <div className="Space">More</div>
			</div>
		</div>
	);
}

export default Sidebar;
