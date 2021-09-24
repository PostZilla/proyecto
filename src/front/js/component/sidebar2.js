import React from "react";

function Sidebar2({ active, text, Icon }) {
	return (
		<div className={`sidebar2 ${active && "sidebar2--active"}`}>
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

export default Sidebar2;
