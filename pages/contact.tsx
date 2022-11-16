import MainLayout1 from "../layouts/MainLayout1";
import Header1 from "../components/Header1";
import Head from "next/head";
import type { NextPage } from "next";

const ContactPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Contact us</title>
			</Head>
			<MainLayout1>
				<main>
					<Header1 title={"Contact Us"} subTitle={"This is the contact page"} />
				</main>
			</MainLayout1>
		</>
	);
};

export default ContactPage;
