import HeroBanner from "@/app/components/HeroBanner";
import H1 from "@/app/components/ui/h1";


export default function Home() {
    return (
        <div className="container mx-auto py-8">
            <HeroBanner />
            <H1>Tasty Beer Club</H1>
            <p className="text-lg text-gray-700">
                Browse our selection of high-quality products. Find what you need in our webshop.
            </p>
        </div>
    );
}
