import React, { useContext, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Avatar } from "@material-ui/core";

import "../../styles/postzibox.scss";
import { Context } from "../store/appContext";

function Jumbobox(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="profileRight">
			<div className="profileRightTop">
				<div className="profileCover">
					<img
						className="profileCoverImg"
						src="https://img.freepik.com/vector-gratis/fondo-comic-amarillo-diseno-plano_23-2148798165.jpg?size=626&ext=jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
Jumbobox.propTypes = {
	user_id: PropTypes.string
};
export default Jumbobox;
