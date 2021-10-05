import React from "react";
import "../../styles/rightbar.scss";
import CakeIcon from "@material-ui/icons/Cake";

export default function rightbar() {
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				<div className="birthdayContainer">
					<img
						className="birthdayImg"
						src="https://raw.githubusercontent.com/safak/youtube/mern-social-app/api/public/images/gift.png"
						alt=""
					/>

					<span className="birthdayText">
						<b>Michael Greik</b> and
						<b> 3 others friends </b>
						have a birthday today
					</span>
				</div>
				<img
					className="rightbarAd"
					src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/ad.png"
					alt=""
				/>
				<h4 className="rightbarTitle"></h4>
			</div>
		</div>
	);
}
