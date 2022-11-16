import React from "react";

const Button1 = ({ text, classes }) => {
	return (
		<button className={classes} type="submit">
			{text}
		</button>
	);
};

export default Button1;
