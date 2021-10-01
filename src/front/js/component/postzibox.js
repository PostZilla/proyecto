import { Avatar } from "@material-ui/core";
import React from "react";
import "../../styles/postzibox.scss";

function postzibox() {
	return (
		<div className="postzibox">
			<form>
				<div className="postzibox_input">
					<Avatar src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg" />
					<input placeholder="What´s happening?" type="text" />
				</div>
				<button className="postzibox_button">Postzi</button>
			</form>
		</div>
	);
}

export default postzibox;
