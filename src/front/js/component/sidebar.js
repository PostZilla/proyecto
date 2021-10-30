import React, { useContext } from "react";
import "../../styles/sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faDragon, faEllipsisH, faEnvelope, faListAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PostZilla from "../../img/PostZilla.png";
import Postzi from "../../img/T-rex.png";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
	const { store, actions } = useContext(Context);

	return (
		<div className="sidebar">
			<div className="Postzilla_icon">
				<img src={PostZilla} width="90" height="90" color="blue" />
			</div>
			<Link to={"/home"}>
				<div className="Home">
					<FontAwesomeIcon icon={faHome} /> <div className="Space">Home</div>
				</div>
			</Link>
			<Link to={{ pathname: !!store.user && store.user.id, state: store.user.id }}>
				<div className="Profile">
					<FontAwesomeIcon icon={faUser} /> <div className="Space">Perfil</div>
				</div>
			</Link>

			<Link onClick={() => actions.signOut()} to={"/"}>
				<div className="logout">
					<FontAwesomeIcon icon={faSignOutAlt} /> <div className="Space">Cerrar Sesión</div>
				</div>
			</Link>
		</div>
	);
}

export default Sidebar;
