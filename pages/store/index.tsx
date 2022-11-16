import MainLayout1 from "../../layouts/MainLayout1";
import Head from "next/head";
import Header1 from "../../components/Header1";
import type { NextPage } from "next";

const StorePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Our store</title>
			</Head>
			<MainLayout1>
				<main>
					<Header1 title={"Our Store"} subTitle={"This is the store page"} />
				</main>
			</MainLayout1>
		</>
	);
};

export default StorePage;
