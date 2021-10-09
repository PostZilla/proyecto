import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import "../../styles/postzibox.scss";

function Postzibox(props) {
	const { store, actions } = useContext(Context);
	const [text, setText] = useState("");
	const [file, setFile] = useState("");
	const post = () => {
		const formData = new FormData();
		formData.append("text", text);
		formData.append("File", file);
		actions.Post(formData);
		setFile("");
		setText("");
	};

	return (
		<div className="postzibox">
			<div className="postzibox_input">
				<Avatar src={props.profileimg} />
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

				<button onClick={() => post()} className="postzibox_button">
					Post
				</button>
			</div>
		</div>
	);
}
Postzibox.propTypes = {
	profileimg: PropTypes.string
};
export default Postzibox;
