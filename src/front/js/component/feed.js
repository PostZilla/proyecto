import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/feed.scss";

export const Home = () => {
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
		<div className="container">
			<div className="postbox">
				<div className="input-group">
					<input
						className="posttext form-control"
						aria-label="With textarea"
						type="text"
						value={text}
						onChange={e => setText(e.target.value)}
						placeholder="Postea"
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
			<div className="" />
		</div>
	);
};
