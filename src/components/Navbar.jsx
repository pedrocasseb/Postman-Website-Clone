import React from "react";
import logo from "../assets/postman-logo-orange.svg";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between bg-white pt-2.5 pb-3 px-4">
            <div className="flex items-center">
                <a href="#">
                    <img src={logo} alt="Postman Clone Logo" className="h-8" />
                </a>
                <ul className="flex items-center gap-12 ml-8 text-sm font-medium text-(--primary-nav-font-color) ">
                    <li className="flex items-center gap-1 hover:text-(--secondary-nav-font-color) transition-colors duration-100">
                        <a href="#" className="">
                            Product
                        </a>
                        <ChevronDown size={16} className="cursor-pointer" />
                    </li>
                    <li className="flex items-center gap-1 hover:text-(--secondary-nav-font-color) transition-colors duration-100">
                        <a href="#" className="">
                            Solutions
                        </a>
                        <ChevronDown size={16} className="cursor-pointer" />
                    </li>
                    <li className="flex items-center gap-1 hover:text-(--secondary-nav-font-color) transition-colors duration-100">
                        <a href="#" className="">
                            Pricing
                        </a>
                    </li>
                    <li className="flex items-center gap-1 hover:text-(--secondary-nav-font-color) transition-colors duration-100">
                        <a href="#" className="">
                            Enterprise
                        </a>
                    </li>
                    <li className="flex items-center gap-1 hover:text-(--secondary-nav-font-color) transition-colors duration-100">
                        <a href="#" className="">
                            Resources
                        </a>
                        <ChevronDown size={16} className="cursor-pointer" />
                    </li>
                </ul>
            </div>
            <div className="flex items-center text-sm font-medium gap-1">
                <a
                    href="#"
                    className="bg-zinc-100 py-1.5 px-3 rounded-sm border border-zinc-300 text-(--secondary-nav-font-color) hover:text-white hover:bg-black hover:border-black"
                >
                    Contact Sales
                </a>
                <a
                    href="#"
                    className="bg-zinc-100 py-1.5 px-3 rounded-sm border border-zinc-300 text-(--secondary-nav-font-color) hover:text-white hover:bg-black hover:border-black"
                >
                    Sign in
                </a>
                <a
                    href="#"
                    className="bg-(--primary-brand-color) py-1.5 px-3 rounded-sm border border-(--primary-brand-color) text-white hover:bg-(--secondary-brand-color) hover:border-(--secondary-brand-color)"
                >
                    Sign Up for Free
                </a>
            </div>
        </div>
    );
};

export default Navbar;
