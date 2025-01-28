import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
    display: "swap",
});
export const metadata: Metadata = {
    title: "The Tasty Beer Club Homepage",
    description: "Order the most delicious beer in the world",
    robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body>{children}</body>
        </html>
    );
}