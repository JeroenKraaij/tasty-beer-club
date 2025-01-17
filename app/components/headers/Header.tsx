import HeaderMobile from "@/app/components/headers/headerMobile";
import HeaderWideScreens from "@/app/components/headers/headerWide";

export default function Header() {
    return (
        <header>
            <HeaderWideScreens />
            {/*<HeaderMobile />*/}
            <HeaderMobile/>
        </header>
    );
}