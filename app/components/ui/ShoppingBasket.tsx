import Link from "next/link";
import Image from "next/image";

interface ShoppingBasketProps {
    imageSrc?: string;
    altText?: string;
    className?: string;
    height?: number | `${number}` | undefined;
    width?: number | `${number}` | undefined;
}

export default function ShoppingBasket({
                                 imageSrc = "/TastyBeerClubLogo.svg",
                                 altText = "The Tasty Beer Club logo",
                                 className = "",
                                 height = "10",
                                 width = "10",
                             }: ShoppingBasketProps) {
    return (
        <Link href="/card">
            <div className={`flex items-center gap-3 ${className}`}>
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={altText}
                        height={height}
                        width={width}
                        className={className}
                    />
                )}
            </div>
        </Link>
    );
}
