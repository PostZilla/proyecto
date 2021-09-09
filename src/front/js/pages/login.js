import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
				<h4>Log in</h4>
				<div className="form-group">
					<label>Email address</label>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="form-control"
						placeholder="Your email here!"
					/>
				</div>
				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						className="form-control"
						placeholder="Your password"
					/>
				</div>
				<button onClick={() => actions.sign_in(email, password)} className="btn btn-primary btn-block">
					Submit
				</button>
				You are not registered? <Link to={"/sign-up"}>Sign up!</Link>{" "}
			</div>
		</div>
	);
};

export default Login;
