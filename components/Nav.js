import Image from "next/image";
import Dropdown from "./Dropdown";
import NavItem from "./NavItem";
import React, { useState, useEffect } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    });

    return (
        <>
            <nav className="flex justify-between md:justify-start items-center max-w-2xl">
                <div className="-ml-8 md:ml-0">
                    <Image
                        className="object-contain"
                        src="https://static.wixstatic.com/media/4aa103_7523676b913e458097b002b060b4b3f1~mv2.png/v1/fill/w_275,h_245,al_c,q_85,usm_0.66_1.00_0.01/Rookbook%20LOGO%20(2).webp"
                        width={200}
                        height={100}
                    />
                </div>

                <div
                    className="px-10 cursor-pointer md:hidden"
                    onClick={toggle}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </div>

                <div className="pr-8 md:flex md:flex-grow justify-evenly max-w-2xl hidden">
                    <NavItem title="Homestand" />
                    <NavItem title="About Us" />
                    <NavItem title="The Team" />
                    <NavItem title="Partners" />
                </div>
            </nav>
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </>
    );
}

export default Nav;
