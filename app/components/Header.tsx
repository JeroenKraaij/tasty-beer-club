import Link from "next/link";
import Logo from "@/app/components/ui/Logo";
import { FaFacebookF, FaTwitter, FaInstagram,} from "react-icons/fa";
import ShoppingBasket from "@/app/components/ui/ShoppingBasket";
import SocialIcones from "@/app/components/ui/SocialIcones";

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
    ]

export default function Header() {
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
                    <ul className="flex gap-16 font-bold text-lg uppercase text-black">
                        {routesMenu.map((route) => (
                            <li key={route.path} className="hover:text-[#E3A1AD] hover:underline hover:underline-offset-4 hover:decoration-[#E3A1AD] hover:decoration-2 transition">
                                <Link href={route.path}>{route.name}</Link>
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
