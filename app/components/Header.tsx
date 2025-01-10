"use client";

import Link from "next/link";
import Logo from "@/app/components/ui/Logo";
import ShoppingBasket from "@/app/components/ui/ShoppingBasket";
import SocialIcones from "@/app/components/ui/SocialIcones";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import {motion} from "framer-motion";

const routesMenu = [

    {
        name: "Home",
        path: "/",
    },
    {
        name: "Smaaktest",
        path: "/smaaktest",
    },
    {
        name: "Webshop",
        path: "/webshop",
    },
    {
        name: "Blog",
        path: "/blog",
    },
    {
        name: "Contact",
        path: "/contact",
    }
    ];

export default function Header() {
    const activePathname = usePathname()

    return (
        <header className="flex w-full h-[200px] mx-auto items-center justify-between px-16">
            <Logo
                imageSrc="/logoTastyBeerClub.svg"
                altText="The Tasty Beer Club logo"
                className="bg-white"
                height="150"
                width="150"
            />
            <nav className="flex">
                    <ul className="flex gap-16 font-bold text-lg uppercase">
                        {routesMenu.map((route) => (
                            <li key={route.path}
                                className={clsx("hover:text-pinkLady relative transition", {
                                    "text-pinkLady": activePathname === route.path,
                                    "text-TextColour": activePathname !== route.path,
                                })}
                            >
                                <Link href={route.path}>{route.name}</Link>
                                {activePathname === route.path && (
                                    <motion.div
                                        layoutId="nav-active-link"
                                        className="bg-pinkLady h-1 w-full absolute  ">
                                    </motion.div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            <div className="flex gap-8">
                <SocialIcones/>
                <ShoppingBasket
                    imageSrc="/Winkelmandje.svg"
                    altText="Winkelmandje"
                    className="bg-[#999E66] p-1 rounded-full"
                    height="100"
                    width="100"
                />
            </div>
        </header>
    );
}
