import React from "react";
import Link from "next/link";

const Link1 = ({ href, text, classes }) => {
	return (
		<Link className={classes} href={href}>
			{text}
		</Link>
	);
};

export default Link1;
