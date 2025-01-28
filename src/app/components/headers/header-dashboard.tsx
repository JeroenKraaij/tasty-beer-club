"use client";

import React, { useState } from "react";
import Logo from "@/app/components/ui/logo";
import WebsiteNav from "@/app/components/navigation/website-nav";
import SocialMedia from "@/app/components/ui/social-icons";
import ShoppingBasket from "@/app/components/ui/shopping-basket";
import DashboardNav from "@/app/components/navigation/dashboard-nav";

export default function HeaderDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 lg:px-6 py-4">
            <div className="flex justify-between items-center w-full lg:w-auto">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-600 focus:outline-none lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <Logo
                    imageSrc="/logoTastyBeerClub.svg"
                    altText="The Tasty Beer Club logo"
                    className="bg-white"
                    height="150"
                    width="150"
                />
                <ShoppingBasket
                    imageSrc="/Winkelmandje.svg"
                    altText="Winkelmandje"
                    className="bg-[#999E66] p-1 rounded-full lg:hidden"
                    height="100"
                    width="100"
                />
            </div>

            {isMenuOpen && (
                <div className="flex flex-col w-full mt-8 lg:hidden">
                    <DashboardNav className="flex flex-col space-y-4 font-bold gap-2 text-lg uppercase" />
                    <div className="mt-8">
                        <SocialMedia />
                    </div>
                </div>
            )}

            <div className="hidden lg:flex justify-between items-center w-full">
                <DashboardNav  className="flex space-x-6 gap-16 font-bold text-lg uppercase" />
                <div className="flex gap-8">
                    <SocialMedia />
                    <ShoppingBasket
                        imageSrc="/Winkelmandje.svg"
                        altText="Winkelmandje"
                        className="bg-[#999E66] p-1 rounded-full"
                        height="100"
                        width="100"
                    />
                </div>
            </div>
        </header>
    );
}