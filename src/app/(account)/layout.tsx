import { ReactNode } from 'react';
import HeaderDashboard from "@/app/components/headers/header-dashboard";
import Footer from "@/app/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
    return <>
        <HeaderDashboard/>
            {children}
        <Footer/>
        </>
}