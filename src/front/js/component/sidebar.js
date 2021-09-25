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
				<FontAwesomeIcon icon={faHome} /> Home
			</div>
			<div className="Explore">
				<FontAwesomeIcon icon={faSearch} /> Explore
			</div>
			<FontAwesomeIcon icon={faBell} /> Notification
			<FontAwesomeIcon icon={faEnvelope} /> Messages
			<FontAwesomeIcon icon={faBookmark} />
			Bookmarks
			<FontAwesomeIcon icon={faListAlt} />
			List
			<FontAwesomeIcon icon={faUser} />
			Profile
			<FontAwesomeIcon icon={faEllipsisH} /> More
		</div>
	);
}

export default Sidebar;
