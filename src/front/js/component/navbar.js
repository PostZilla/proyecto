import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PostZilla from "../../img/PostZilla.png";
import "../../styles/navbar.scss";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
							/>
							<button className="navbtn btn btn-light my-2 my-sm-0" type="submit">
								Search
							</button>
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
