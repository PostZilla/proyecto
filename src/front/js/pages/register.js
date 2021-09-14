import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

const Register = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [last_name, setLast_name] = useState("");
	const [country, setCountry] = useState("");
	let history = useHistory();

	useEffect(
		() => {
			if (store.isAuthenticate) {
				history.goBack(-1);
			}
		},
		[store.isAuthenticate]
	);
	return (
		<div className="principal-container text-center">
			<div className="myform">
				<h4>Registrate!</h4>
				<div className="form-group">
					<label>Nombre</label>
					<input
						type="text"
						value={name}
						onChange={e => setName(e.target.value)}
						className="form-control"
						placeholder="Nombre"
					/>
				</div>
				<div className="form-group">
					<label>Apellido</label>{" "}
					<input
						type="text"
						value={last_name}
						onChange={e => setLast_name(e.target.value)}
						className="form-control"
						placeholder="Apellido"
					/>
				</div>
				<div className="form-group">
					<label>User</label>
					<input
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						className="form-control"
						placeholder="User"
					/>
				</div>
				<div className="form-group">
					<label>Correo Electronico</label>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="form-control"
						placeholder="Correo Electrónico"
					/>
				</div>
				<div className="form-group">
					<label>Contraseña</label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className="form-control"
						placeholder="Contraseña"
					/>
				</div>
				<div className="form-group">
					<label>País</label>
					<input
						type="text"
						value={country}
						onChange={e => setCountry(e.target.value)}
						className="form-control"
						placeholder="País"
					/>
				</div>
				<button
					onClick={() => actions.register(email, password, username, name, last_name, country)}
					className="btn subre btn-block">
					Ingresar
				</button>
				¿Ya estás registrado? <Link to={"/"}>Inicia Sesión!</Link>{" "}
			</div>
		</div>
	);
};

export default Register;
