import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigation = () => {
	const { pathname } = useRouter();

	const setActiveLink = (path) => {
		return pathname === path;
	};

	const user = true;

	return (
		<header className="w-full p-4">
			{/* replace with real logo */}
			<div className="flex items-center container mx-auto">
				<Link href="/">
					<div className="w-12 h-12 bg-teal-200 border border-black flex items-center justify-center cursor-pointer">
						<span className="uppercase">Logo</span>
					</div>
				</Link>
				<ul className="flex items-center ml-auto">
					<li className="mr-2">
						<Link
							className={`${
								setActiveLink("/about") ? "text-teal-800" : null
							} hover:text-teal-`}
							href="/about">
							About
						</Link>
					</li>
					<li className="mr-2">
						<Link
							className={setActiveLink("/services") ? "text-teal-800" : null}
							href="/services">
							Services
						</Link>
					</li>
					<li className="mr-2">
						<Link
							className={setActiveLink("/blog") ? "text-teal-800" : null}
							href="/blog">
							Blog
						</Link>
					</li>
					<li className="mr-2">
						<Link
							className={setActiveLink("/store") ? "text-teal-800" : null}
							href="/store">
							Store
						</Link>
					</li>
					<li className="mr-2">
						<Link
							className={setActiveLink("/contact") ? "text-teal-800" : null}
							href="/contact">
							Contact
						</Link>
					</li>
					{user ? (
						<li className="mr-2">
							<Link
								className={setActiveLink("/admin") ? "text-teal-800" : null}
								href="/admin">
								Admin
							</Link>
						</li>
					) : null}
				</ul>
			</div>
		</header>
	);
};

export default MainNavigation;
