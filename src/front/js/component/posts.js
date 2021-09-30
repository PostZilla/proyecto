import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const Posts = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card m-3 bg-light">
			<img className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text" />
				<div className="d-flex justify-content-between">
					<button href="#" className="btn btn-outline-warning">
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};
Posts.propTypes = {
	post: PropTypes.json,
	user: PropTypes.json
};
