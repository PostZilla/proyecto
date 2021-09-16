import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

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
		<div>
			<input
				type="email"
				placeholder="Ingresar correo electronico"
				value={emailForgot}
				onChange={e => setEmailForgot(e.target.value)}
			/>
			<button onClick={() => forgotPassword()}>Recuperar contraseña</button>
			<p style={{ cursor: "pointer" }} onClick={() => setShowForgotPassword(!showForgotPassword)}>
				Iniciar sesión
			</p>
		</div>
	);
};
