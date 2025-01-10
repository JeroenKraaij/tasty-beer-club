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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.className} text-emerald-600`}>
        <body className="flex-col  min-h-screen bg-white">
            <Header />
                <main className="flex-col flex-grow items-center py-16">
                    <div className="container mx-auto bg-white rounded-lg shadow-md min-h-10 py-8 px-4 sm:px-6 md:px-8">
                    {children}
                    </div>
                </main>
            <Footer />
        </body>
        </html>
    );
}
