
export default function Footer() {
    return (
        <footer className="w-full bg-gray-700 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            </div>
        </footer>
    );
}