import React from "react";
import Head from "next/head";
import MainLayout1 from "../../layouts/MainLayout1";
import Header1 from "../../components/Header1";
import Link1 from "../../components/Link1";

const AdminPage = () => {
	return (
		<>
			<Head>
				<title>Admin</title>
			</Head>
			<MainLayout1>
				<main>
					<Header1
						title={"Admin Dashboard"}
						subTitle={"This is the admin dashboard"}
					/>
					<section className="container mx-auto p-4">
						<h3 className="text-5xl">Posts</h3>
						<Link1
							href="/admin/add-publication"
							text="Add new publication"
							classes="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 my-4 inline-block rounded"
						/>
					</section>
					<section className="container mx-auto p-4">
						<h3 className="text-5xl">Products</h3>
						<Link1
							href="/admin/add-product"
							text="Add new product"
							classes="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 my-4 inline-block rounded"
						/>
					</section>
				</main>
			</MainLayout1>
		</>
	);
};

export default AdminPage;
