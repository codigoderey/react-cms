import MainLayout1 from "../layouts/MainLayout1";
import Head from "next/head";
import Header1 from "../components/Header1";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Welcome to our website</title>
			</Head>
			<MainLayout1>
				<main>
					<Header1 title={"Home Page"} subTitle={"This is the home page"} />
				</main>
			</MainLayout1>
		</>
	);
};

export default Home;
