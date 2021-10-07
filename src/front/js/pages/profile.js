import React from "react";
import "../../styles/profile.scss";
import Feed from "../component/feed";
import Sidebar from "../component/sidebar";
import Widgets from "../component/widgets";

export default function profile() {
	return (
		<>
			<div className="profile">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg"
								alt=""
							/>
							<img
								className="profileUserImg"
								src="https://i.pinimg.com/564x/a5/0c/64/a50c6419a7da56be403a445d5dc3f8d4.jpg"
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">4Geeks</h4>
							<span className="profileInfoDescription">Hola 4Geeks</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<Widgets />
					</div>
				</div>
			</div>
		</>
	);
}
