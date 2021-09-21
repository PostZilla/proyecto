import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PostZilla from "../../img/PostZilla.png";
import "../../styles/navbar.scss";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [usernames, setUsernames] = useState([]);
	const [text, setText] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	useEffect(() => {
		fetch(process.env.BACKEND_URL + "/api/usernames")
			.then(resp => {
				if (resp.ok) {
					return resp.json();
				}
			})
			.then(json => setUsernames(json.data));
	}, []);

	const onChangeHandler = text => {
		let matches = [];
		if (text.length > 0) {
			matches = usernames.filter(user => {
				const regex = new RegExp(`${text}`, "gi");
				return user.username.match(regex);
			});
		}
		setSuggestions(matches);
		setText(text);
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top">
			<div className="container">
				<Link className="navbar-brand" to={"/"}>
					<img src={PostZilla} width="80" height="70" />
				</Link>
				<div className="collapse navbar-collapse" id="navbarToggle">
					{!store.isAuthenticate ? (
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="navbar-brand navbtn btn btn-light" to={"/"}>
									Iniciar sesión
								</Link>
							</li>
							<li className="nav-item">
								<Link className="navbar-brand navbtn btn btn-outline-light" to={"/register"}>
									Registrarse
								</Link>
							</li>
						</ul>
					) : (
						<>
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={e => onChangeHandler(e.target.value)}
								value={text}
								onBlur={() => setSuggestions([])}
							/>

							{suggestions &&
								suggestions.map((suggestion, i) => (
									<div
										onClick={() => setText(suggestion.usernames)}
										key={i}
										className="suggestion col-md-12 justify-content-md-center"
									/>
								))}

							<ul className="navbar-nav ml-auto ">
								<li className="nav-item">
									<Link
										onClick={() => actions.signOut()}
										className="navbar-brand navbtn btn btn-light"
										to={"/"}>
										Cerrar sesión
									</Link>
								</li>
							</ul>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};
