import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/postzibox.scss";
import Loader from "react-loader-spinner";

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

	const changeFile = e => {
		setFile(e.target.files[0]);
		console.log(e.target.files[0]);
	};

	return (
		<div className="postzibox">
			<div className="postzibox_input">
				<Avatar className="avatar" src={props.profileimg} />

				<input
					onChange={e => setText(e.target.value)}
					value={text}
					placeholder="¿Qué está pasando?"
					type="text"
				/>
			</div>
			{store.isLoading ? (
				<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
			) : (
				<div>
					<span className="btn btn-light btn-file">
						<i className="fas fa-images" />
						<input type="file" name="file" onChange={e => changeFile(e)} />
					</span>

					{file != "" ? <span>{file.name}</span> : null}

					<span className="btn btn-light btn-file" onClick={() => post()}>
						Post
					</span>
				</div>
			)}
		</div>
	);
}
Postzibox.propTypes = {
	profileimg: PropTypes.string
};

export default Postzibox;
