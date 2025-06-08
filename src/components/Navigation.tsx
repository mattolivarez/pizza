//"use client";

import Link from "next/link";
// import ModernBars from "./ModernBars";
// import Close from "./Close";
// import { UserAuth } from "../context/AuthContext";

export default function Navigation() {
    //const {user} = UserAuth();

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full">
                    <Link className="link no-underline text-2xl font-bold flex-1" href="/">
                        <h1 className="mx-2 px-2">NYPD Wood Fire Stone Oven Pizza</h1>
                    </Link>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <Link role="menuitem" className="text-lg py-1 px-6 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-accent transition-colors" href="/">
                                Home
                            </Link>
                            <Link role="menuitem" className="text-lg py-1 px-6 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-accent transition-colors" href="/about">
                                About Us
                            </Link>
                            <Link role="menuitem" className="text-lg py-1 px-6 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-accent transition-colors" href="/menu">
                                Menu
                            </Link>
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-300 min-h-full w-80 p-4">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* close icon */}
                        <svg
                            className="inline-block h-6 w-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512">
                            <polygon
                            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>

                    {/* Sidebar content here */}
                    <Link role="menuitem" className="text-lg py-1 px-6 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-accent transition-colors" href="/">
                        Home
                    </Link>
                    <Link role="menuitem" className="text-lg py-1 px-6 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-accent transition-colors" href="/about">
                        About Us
                    </Link>
                    <Link role="menuitem" className="text-lg py-1 px-6 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-accent transition-colors" href="/menu">
                        Menu
                    </Link>
                </ul>
            </div>
        </div>
    );
}