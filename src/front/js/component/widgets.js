import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

export default function widgets() {
	return (
		<div className="widgest">
			<div className="widgets_input">
				<SearchIcon className="search_widgetsIcon" />
				<input placeholder="Search Postzilla" type="text" />
			</div>

			<div className="widgets_container">
				<h2>What´s happening</h2>
				<TwitterTweetEmbed tweetId={"1441465385258139649"} />
				<TwitterTimelineEmbed sourceType="profile" screenName="Bryan" options={{ height: 400 }} />
			</div>
		</div>
	);
}
