import React from "react";
import "../../styles/sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faDragon, faEllipsisH, faEnvelope, faListAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Sidebar2 from "./sidebar2";
function Sidebar() {
	return (
		<div className="sidebar">
			<Sidebar2 Icon={faDragon} />
			<Sidebar2 Icon={faHome} text="Home" />
			<FontAwesomeIcon icon={faSearch} />
			<FontAwesomeIcon icon={faBell} />
			<FontAwesomeIcon icon={faEnvelope} />
			<FontAwesomeIcon icon={faBookmark} />
			<FontAwesomeIcon icon={faListAlt} />
			<FontAwesomeIcon icon={faUser} />
			<FontAwesomeIcon icon={faEllipsisH} />
		</div>
	);
}

export default Sidebar;
