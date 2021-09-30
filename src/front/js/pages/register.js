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
	const [file, setFile] = useState();
	const register = () => {
		const formData = new FormData();
		formData.append("email", email);
		formData.append("password", password);
		formData.append("username", username);
		formData.append("name", name);
		formData.append("last_name", last_name);
		formData.append("country", country);
		formData.append("File", file);
		actions.register(formData);
	};

	useEffect(
		() => {
			if (store.isRegitred && store.msg !== undefined) {
				history.goBack();
				alert(store.msg);
			}
		},
		[store.isRegitred]
	);
	useEffect(() => {
		fetch("https://countriesnow.space/api/v0.1/countries")
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(data => {
				console.log(data);
				setCountries(data.data);
			})
			.catch(error => console.error("[ERROR GET COUNTRIES]", error));
	}, []);

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
						{countries.length > 0 &&
							countries.map((item, key) => (
								<option key={key} value={item.country}>
									{item.country}
								</option>
							))}
					</select>
				</div>
				<div className="form-group imgbox">
					<label>Ponte cara</label>
					<input
						className="form-control-file"
						type="file"
						name="file"
						onChange={e => setFile(e.target.files[0])}
					/>
				</div>
				<div>
					<button onClick={() => register()} type="submit" className="btn  sub btn-block">
						Ingresar
					</button>
				</div>
				¿Ya estás registrado? <Link to={"/"}>Inicia Sesión!</Link>{" "}
			</div>
		</div>
	);
};

export default Register;
