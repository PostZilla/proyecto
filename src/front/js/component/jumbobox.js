import React, { useContext, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Avatar } from "@material-ui/core";
import Header from "../../img/header.jpg";

import "../../styles/postzibox.scss";
import { Context } from "../store/appContext";

function Jumbobox(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="profileRight">
			<div className="profileRightTop">
				<div className="profileCover">
					<img className="profileCoverImg" src={Header} alt="" />
					<img className="profileuserImg" src={props.profileimg} alt="" />
					<span className="profileInfoName"> Perfil de {props.name} </span>
				</div>
			</div>
		</div>
	);
}
Jumbobox.propTypes = {
	profileimg: PropTypes.string,
	name: PropTypes.string
};
export default Jumbobox;
