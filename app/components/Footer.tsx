export default function Footer() {
    return (
        <footer className="w-full text-white">
            {/* First Container */}
            <div className="w-full mx-auto bg-[#999E66] flex justify-center items-center py-16">
                <img
                    src="/TastyBeerClub-Background-Image-footer.webp"
                    alt="Footer Image"
                    className="max-h-72 object-contain"
                />
            </div>

            {/* Second Container */}
            <div className="w-full bg-black text-center py-4">
                <p className="text-s">
                    Tasty Beer Club | Alle rechten voorbehouden &copy; {new Date().getFullYear()}  | {" "}
                    <a href="/terms" className="underline hover:text-gray-400">
                        Terms & Conditions
                    </a>
                </p>
            </div>
        </footer>
    );
}
