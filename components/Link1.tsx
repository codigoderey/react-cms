import React from "react";
import Link from "next/link";

interface Link1Props {
	href: string;
	text: string;
	classes: string;
}

const Link1 = ({ href, text, classes }: Link1Props) => {
	return (
		<Link className={classes} href={href}>
			{text}
		</Link>
	);
};

export default Link1;
