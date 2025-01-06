import Link from "next/link";

interface LogoProps {
    imageSrc?: string; // Path to the image
    altText?: string; // Alt text for the image
    text?: string; // Optional text next to the logo
    className?: string; // Additional classes for the wrapper
    height?: string; // Height of the image
    width?: string; // Width of the image
}

export default function Logo({
                                 imageSrc = "/TastyBeerClubLogo.svg",
                                 altText = "The Tasty Beer Club logo",
                                 text = "My App",
                                 className = "",
                                 height = "3rem", // Default height (3rem = 48px)
                                 width = "3rem", // Default width
                             }: LogoProps) {
    return (
        <Link href="/">
            <div className={`flex items-center gap-3 ${className}`}>
                {imageSrc && (
                    <img
                        src={imageSrc}
                        alt={altText}
                        style={{ height, width }} // Inline styles for image size
                        className="object-contain" // Ensures proper scaling
                    />
                )}
                {text && <span className="text-xl font-bold">{text}</span>}
            </div>
        </Link>
    );
}
