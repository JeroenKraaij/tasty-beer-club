

import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Put all your stuff in the Tasty Beer Club Beer Basket",
    description: "The Beer Basket is your featured taste of beer",
};





export default function Webshop() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">Winkelmandje</h1>
            <p className="text-lg text-gray-700">
                Browse our selection of high-quality products. Find what you need in our webshop.
            </p>
        </div>
    );
}
