import React, { useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { Avatar } from "@material-ui/core";

import "../../styles/postzibox.scss";

function Jumbobox(props) {
	return (
		<div className="profileRight">
			<div className="profileRightTop">
				<div className="profileCover">
					<img
						className="profileCoverImg"
						src="https://img.freepik.com/vector-gratis/fondo-comic-amarillo-diseno-plano_23-2148798165.jpg?size=626&ext=jpg"
						alt=""
					/>
					<Avatar className="" src={props.profileimg} />
					<span className="profileInfoDescription">{props.name}</span>
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
