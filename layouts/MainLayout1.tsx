import MainNavigation1 from "../components/MainNavigation1";
import Footer1 from "../components/Footer1";
import { ComponentChildren } from "../types/index";

const MainLayout = ({ children }: ComponentChildren) => {
	return (
		<>
			<MainNavigation1 />
			{children}
			<Footer1 />
		</>
	);
};

export default MainLayout;
