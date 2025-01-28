import React, { ReactNode } from 'react';
    import HeaderWebsite from "@/app/components/headers/header-website";
    import Footer from "@/app/components/Footer";

    export default function Layout({ children }: { children: ReactNode }) {
        return (
            <div className="flex flex-col min-h-screen w-full antialiased justify-between items-center">
                <HeaderWebsite/>
                <main className="flex flex-col flex-1 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </main>
                <Footer/>
            </div>
        );
    }