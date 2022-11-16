import MainLayout1 from "../../layouts/MainLayout1";
import Head from "next/head";
import Header1 from "../../components/Header1";
import type { NextPage } from "next";

const BlogPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Our blog</title>
			</Head>
			<MainLayout1>
				<main>
					<Header1 title={"Our Blog"} subTitle={"This is the blog page"} />
				</main>
			</MainLayout1>
		</>
	);
};

export default BlogPage;
