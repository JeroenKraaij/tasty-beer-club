import Logo from "@/app/components/ui/logo";
import ShoppingBasket from "@/app/components/ui/shopping-basket";
import SocialIcons from "@/app/components/ui/social-icons";
import Navigation from "@/app/components/Navigation";

export default function HeaderWide() {

    return (
        <header className="w-full bg-white shadow-md hidden md:flex justify-between items-center px-6 py-4 h-[200px]">
            <Logo
                imageSrc="/logoTastyBeerClub.svg"
                altText="The Tasty Beer Club logo"
                className="bg-white"
                height="150"
                width="150"
            />
            <Navigation className="flex space-x-6 gap-16 font-bold text-lg uppercase" />
            <div className="flex gap-8">
                <SocialIcons/>
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

