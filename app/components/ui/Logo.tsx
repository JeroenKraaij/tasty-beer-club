import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    imageSrc?: string;
    altText?: string;
    className?: string;
    height?: number | `${number}` | undefined;
    width?: number | `${number}` | undefined;
}

export default function Logo ({
                                           imageSrc = "/TastyBeerClubLogo.svg",
                                           altText = "The Tasty Beer Club logo",
                                           className = "",
                                           height = "250",
                                           width = "250",
                                       }: LogoProps) {
    return (
        <Link href="/">
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
