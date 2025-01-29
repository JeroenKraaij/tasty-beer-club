

import type {Metadata} from "next";
import H1 from "@/app/components/ui/h1";

export const metadata: Metadata = {
    title: "Put all your stuff in the Tasty Beer Club Beer Basket",
    description: "The Beer Basket is your featured taste of beer",
};


export default function Webshop() {
    return (
        <div className="container mx-auto py-8">
            <H1>Winkelmandje</H1>
            <p className="text-lg text-gray-700">
                Browse our selection of high-quality products. Find what you need in our webshop.
            </p>
        </div>
    );
}
