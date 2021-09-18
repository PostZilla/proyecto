import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export const Password = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showForgotPassword, setShowForgotPassword] = useState(false);
	const [emailForgot, setEmailForgot] = useState("");

	const forgotPassword = () => {
		actions.forgotPassword(emailForgot);
		setEmailForgot("");
		setShowForgotPassword(!showForgotPassword);
	};
	return (
		<div className="principal-container text-center">
			<input
				type="email"
				placeholder="Correo Electronico"
				className="form-control"
				value={emailForgot}
				onChange={e => setEmailForgot(e.target.value)}
			/>
			<button className="btn subpass btn-block" onClick={() => forgotPassword()}>
				Recuperar contraseña
			</button>
			<Link to={"/"} onClick={() => setShowForgotPassword(!showForgotPassword)}>
				Inicia Sesión!
			</Link>
		</div>
	);
};
