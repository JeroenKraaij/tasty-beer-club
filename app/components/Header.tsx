import Link from "next/link";
import Logo from "@/app/components/ui/Logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaShoppingBasket } from "react-icons/fa"; // For social and basket icons

export default function Header() {
    return (
        <header className="w-full bg-forest text-white h-[200px]">
            <div className="container mx-auto h-full flex items-center justify-between px-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Logo
                        imageSrc="/logoTastyBeerClub.svg"
                        altText="The Tasty Beer Club logo"
                        text=""
                        height="10rem"
                        width="10rem"
                    />
                </div>

                {/* Navigation Section */}
                <nav>
                    <ul className="flex gap-8 font-bold text-lg uppercase text-[#FFEFBC]">
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

                {/* Social Media and Shopping Basket */}
                <div className="flex items-center gap-4">
                    {/* Social Media Icons */}
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFEFBC] hover:text-[#E3A1AD]"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFEFBC] hover:text-[#E3A1AD]"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFEFBC] hover:text-[#E3A1AD]"
                    >
                        <FaInstagram size={20} />
                    </a>

                    {/* Shopping Basket Icon */}
                    <Link
                        href="/cart"
                        className="text-[#FFEFBC] hover:text-[#E3A1AD] flex items-center"
                    >
                        <FaShoppingBasket size={24} />
                    </Link>
                </div>
            </div>
        </header>
    );
}
