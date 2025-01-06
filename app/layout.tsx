import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "The Tasty Beer Club Homepage",
    description: "Order the most delicious beer in the world",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${interSans.variable} min-h-screen flex flex-col`}>
                <Header />
                    <main className="flex-grow">{children}</main>
                 <Footer />
            </body>
        </html>
    );
}