import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../../styles/postzibox.scss";
import db from "./firebase";

function postzibox() {
	const [postziMessage, setPostziMessage] = useState("");
	const [postziImage, setPostziImage] = useState("");

	const sendPostzi = e => {
		e.preventDefault();

		db.collection("post").add({
			displayName: "Bryan Andres",
			username: "bryanndres",
			verified: true,
			text: postziMessage
		});
	};

	return (
		<div className="postzibox">
			<form>
				<div className="postzibox_input">
					<Avatar src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg" />
					<input
						onChange={e => setPostziMessage(e.target.value)}
						value={postziMessage}
						placeholder="What´s happening?"
						type="text"
					/>
				</div>
				<input
					value={postziImage}
					onChange={e => setPostziImage(e.target.value)}
					className="postzibox_imageInput"
					placeholder="Optional Enter image URL"
					type="text"
				/>
				<button onClick={sendPostzi} type="submit" className="postzibox_button">
					Postzi
				</button>
			</form>
		</div>
	);
}

export default postzibox;
