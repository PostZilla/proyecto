import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	useEffect(
		() => {
			if (store.isAuthenticate) {
				history.push("/home");
			}
		},
		[store.isAuthenticate]
	);
	return (
		<div className="principal-container text-center">
			<div className="myform">
				<h4>Iniciar Sesión</h4>
				<div className="form-group">
					<label>Correo Electronico</label>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="form-control"
						placeholder="Ingresa tu correo electronico"
					/>
				</div>
				<div className="form-group">
					<label>Contraseña</label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className="form-control"
						placeholder="Ingresa tu contraseña"
					/>
				</div>
				<button onClick={() => actions.sign_in(email, password)} className="btn sub btn-block">
					Ingresar
				</button>
				O <Link to={"/register"}>registrate!</Link>{" "}
			</div>
		</div>
	);
};

export default Login;
