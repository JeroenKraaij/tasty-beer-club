import Link from "next/link";
import Logo from "@/app/components/ui/Logo";
import { FaFacebookF, FaTwitter, FaInstagram,} from "react-icons/fa";
import ShoppingBasket from "@/app/components/ui/ShoppingBasket";

export default function Header() {
    return (
        <header className="flex w-full h-[200px] mx-auto items-center justify-between px-16">
            <Logo
                imageSrc="/logoTastyBeerClub.svg"
                altText="The Tasty Beer Club logo"
                height="60"
                width="120"
            />
            <nav className="flex bg-amber-600">
                    <ul className="flex gap-8 font-bold text-lg uppercase text-black">
                        <li key="smaaktest">
                            <Link
                                href="/smaaktest"
                                className="hover:text-[#E3A1AD] hover:underline hover:underline-offset-4 hover:decoration-[#E3A1AD] hover:decoration-4"
                            >
                                Smaaktest
                            </Link>
                        </li>
                        <li key="webshop">
                            <Link
                                href="/webshop"
                                className="hover:text-[#E3A1AD] hover:underline hover:underline-offset-4 hover:decoration-[#E3A1AD] hover:decoration-4"
                            >
                                Webshop
                            </Link>
                        </li>
                        <li key="blog">
                            <Link
                                href="/blog"
                                className="hover:text-[#E3A1AD] hover:underline hover:underline-offset-4 hover:decoration-[#E3A1AD] hover:decoration-4"
                            >
                                Blog
                            </Link>
                        </li>
                        <li key="contact">
                            <Link
                                href="/contact"
                                className="hover:text-[#E3A1AD] hover:underline hover:underline-offset-4 hover:decoration-[#E3A1AD] hover:decoration-4"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4 text-black">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF size={30} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={30} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={30} />
                    </a>
                        <ShoppingBasket
                            imageSrc="/Winkelmandje.svg"
                            altText="Winkelmandje"
                            className="bg-amber-600"
                            height="60"
                            width="60"
                        />
                </div>
        </header>
    );
}
