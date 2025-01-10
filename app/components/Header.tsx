import Logo from "@/app/components/ui/Logo";
import ShoppingBasket from "@/app/components/ui/ShoppingBasket";
import SocialIcons from "@/app/components/ui/SocialIcons";
import Navigation from "@/app/components/Navigation";

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
            <Navigation/>
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
