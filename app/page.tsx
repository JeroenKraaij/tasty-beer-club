import HeroBanner from "@/app/components/HeroBanner";


export default function Home() {
    return (
        <div className="container mx-auto py-8">
            <HeroBanner />
            <h1 className="text-4xl font-bold mb-4">Tasty Beer Club</h1>
            <p className="text-lg text-gray-700">
                Browse our selection of high-quality products. Find what you need in our webshop.
            </p>
        </div>
    );
}
