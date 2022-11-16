interface Button1Props {
	text: string;
	classes: string;
}

const Button1 = ({ text, classes }: Button1Props) => {
	return (
		<button className={classes} type="submit">
			{text}
		</button>
	);
};

export default Button1;
