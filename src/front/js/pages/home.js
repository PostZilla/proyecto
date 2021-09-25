import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [text, setText] = useState("");
	
	return (
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
			<button type="button" className="imgbtn btn btn-light">
				<i className="far fa-images" />
			</button>
			<button onClick={() => actions.Post(text)} type="button" className="postbtn btn btn-light">
				Post
			</button>
		</div>
	);
};
