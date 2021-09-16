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
	const history = useHistory();
	const [countries, setCountries] = useState([]);

	useEffect(
		() => {

			if (store.isRegitred && store.msg !== undefined) {
				history.goBack();
				alert(store.msg);
			}
		},
		[store.isRegitred]
	);
	useEffect(
		() => {
			fetch("https://restcountries.eu/rest/v2/all")
				.then(resp => {
					if (resp.ok) {
						return resp.json();
					}
				})
				.then(data => setCountries(data))
				.catch(error => console.error("[ERROR GET COUNTRIES]", error));
		},
		[countries]
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
				<div className="form-select">
					<label>País</label>
					<select
						className="form-control"
						aria-label="Default select example"
						value={country}
						onChange={e => setCountry(e.target.value)}>
						{countries.map(item => (
							<option key={item.alpha2Code} value={item.alpha2Code}>
								{item.name}
							</option>
						))}
					</select>
				</div>
				<div>
					<button
						onClick={() => actions.register(email, password, username, name, last_name, country)}
						type="submit"
						className="btn subre btn-block">
						Ingresar
					</button>
				</div>
				¿Ya estás registrado? <Link to={"/"}>Inicia Sesión!</Link>{" "}
			</div>
		</div>
	);
};

export default Register;
