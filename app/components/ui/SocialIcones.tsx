
import { FaFacebookF, FaTwitter, FaInstagram,} from "react-icons/fa";

export default function SocialIcones() {
    return (
        <div className="flex items-center gap-8 text-black">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebookF size={30}/>
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTwitter size={30}/>
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram size={30}/>
            </a>

        </div>
    )
}