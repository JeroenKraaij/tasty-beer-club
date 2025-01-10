import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
        <html lang="en" className={`${inter.className} text-TextColour`}>
        <body className="flex-col min-h-screen bg-background">
            <Header/>
                <main className="flex flex-col flex-grow items-center mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                {children}
                </main>
            <Footer/>
        </body>
        </html>
    );
}
