import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { Context } from "../store/appContext";
import "../../styles/postzibox.scss";

function postzibox() {
	const { store, actions } = useContext(Context);
	const [text, setText] = useState("");
	const [file, setFile] = useState("");
	const post = () => {
		const formData = new FormData();
		formData.append("text", text);
		formData.append("File", file);
		actions.Post(formData);
	};

	return (
		<div className="postzibox">
			<div className="postzibox_input">
				<Avatar src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg" />
				<input
					onChange={e => setText(e.target.value)}
					value={text}
					placeholder="What´s happening?"
					type="text"
				/>
			</div>
			<div>
				<span className="btn btn-light btn-file">
					<i className="fas fa-images" />
					<input type="file" name="file" onChange={e => setFile(e.target.files[0])} />
				</span>

				<button onClick={() => post()} type="button" className="postbtn btn btn-light">
					Post
				</button>
			</div>
		</div>
	);
}

export default postzibox;
