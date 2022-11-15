import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNavigation = () => {
    const { pathname } = useRouter();

    const setActiveLink = (path) => {
        return pathname === path;
    };

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
                        <Link href="/about">
                            <a
                                className={`${
                                    setActiveLink('/about')
                                        ? 'text-teal-800'
                                        : null
                                } hover:text-teal-`}
                            >
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link href="/services">
                            <a
                                className={
                                    setActiveLink('/services')
                                        ? 'text-teal-800'
                                        : null
                                }
                            >
                                Services
                            </a>
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link href="/blog">
                            <a
                                className={
                                    setActiveLink('/blog')
                                        ? 'text-teal-800'
                                        : null
                                }
                            >
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link href="/store">
                            <a
                                className={
                                    setActiveLink('/store')
                                        ? 'text-teal-800'
                                        : null
                                }
                            >
                                Store
                            </a>
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link href="/contact">
                            <a
                                className={
                                    setActiveLink('/contact')
                                        ? 'text-teal-800'
                                        : null
                                }
                            >
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default MainNavigation;
