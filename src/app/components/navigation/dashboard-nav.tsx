"use client"

import React from 'react'
import Link from "next/link";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const routesMenu = [

    {
        name: "Home",
        path: "/",
    },
    {
        name: "Account",
        path: "/account",
    },
    {
        name: "Dashboard",
        path: "dashboard",
    }
];

interface NavigationProps {
    className?: string;
}

export default function DashboardNav({className}: NavigationProps) {
    const activePathname = usePathname()

    return (
        <nav>
            <ul className={className}>
                {routesMenu.map((route) => (
                    <li key={route.path}
                        className={cn("hover:text-pinkLady relative transition", {
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
    )
}
