"use client";

import Link from "next/link";
import ModernBars from "./ModernBars";
import Close from "./Close";
import { useState } from "react";
// import { UserAuth } from "../context/AuthContext";

export default function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    //const {user} = UserAuth();
    //console.log(user);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="link no-underline text-xl">
                    <h2 className="text-primary">NYPD Wood Fire Stone Oven Pizza</h2>
                </a>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <Link role="menuitem" className="py-1 px-6 text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                            Home
                        </Link>
                        <Link role="menuitem" className="py-1 px-6 dark:text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                            About Us
                        </Link>
                        <Link role="menuitem" className="py-1 px-6 dark:text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                            Menu
                        </Link>
                        {/* <Link role="menuitem" className="py-1 px-6 dark:text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                            Rent
                        </Link>
                        <a role="menuitem" 
                        className="cursor-pointer py-2 px-6 bg-primary text-primary-900 shadow-xl hover:shadow-none 
                                transition-shadow focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-md ring-offset-4">
                            Logout
                        </a> */}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        {dropdownOpen ? (
                            <Close  />
                        ) : (
                            <ModernBars />  
                        )}  
                    </label>
                    {dropdownOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link onClick={() => setDropdownOpen(false)} role="menuitem" className="py-1 px-6 dark:text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                                Home
                            </Link>
                            <Link onClick={() => setDropdownOpen(false)} role="menuitem" className="py-1 px-6 dark:text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                                About Us
                            </Link>
                            <Link onClick={() => setDropdownOpen(false)} role="menuitem" className="py-1 px-6 dark:text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                                Menu
                            </Link>
                            {/* <Link onClick={() => setDropdownOpen(false)} role="menuitem" className="py-1 px-6 dark:text-primary-200 focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-sm ring-offset-4 hover:text-primary transition-colors" href="/">
                                Rent
                            </Link>
                            <a role="menuitem" 
                            className="cursor-pointer py-2 px-6 bg-primary text-primary-900 shadow-xl hover:shadow-none 
                                    transition-shadow focus:outline-none focus-visible:ring-4 ring-primary-900 rounded-md ring-offset-4">
                                Logout
                            </a> */}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}