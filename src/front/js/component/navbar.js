import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PostZilla from "../../img/PostZilla.png";
import "../../styles/navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import { PropTypes } from "prop-types";

export const Navbar = props => {
	const { store, actions } = useContext(Context);
	const [usernames, setUsernames] = useState([]);
	const [text, setText] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		actions.getSinglePost(props.userid);
	}, []);
	useEffect(
		() => {
			if (store.isAuthenticate) {
				fetch(process.env.BACKEND_URL + "/api/search", {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-type": "application/json"
					}
				})
					.then(resp => {
						if (resp.ok) {
							return resp.json();
						}
					})
					.then(json => {
						setUsernames(json.data);
					});
			}
		},
		[store.isAuthenticate]
	);

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
				{store.isAuthenticate ? (
					<>
						<div className="nav-item dropdown searchInput">
							<SearchIcon className="search_InputIcon" />
							<input
								className="search "
								type="search"
								placeholder="Buscar en Postzilla"
								onChange={e => onChangeHandler(e.target.value)}
								value={text}
								onBlur={() => setSuggestions([])}
							/>

							{suggestions &&
								suggestions.map((suggestion, i) => (
									<ul onClick={() => setText(suggestion.usernames)} key={i} className="list-group">
										<Link to={{ pathname: props.userid, state: props.userid }}>
											<div>{suggestion.username}</div>
										</Link>
									</ul>
								))}
						</div>

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
				) : (
					<>
						<Link className="navbar-brand" to={"/"}>
							<img src={PostZilla} width="80" height="70" />
						</Link>
						<div className="collapse navbar-collapse" id="navbarToggle">
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
						</div>
					</>
				)}
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	profileimg: PropTypes.string,
	userid: PropTypes.number
};
