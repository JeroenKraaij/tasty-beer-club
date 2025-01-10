import type { Metadata } from "next";
import H1 from "@/app/components/htmlHeadingTag/h1";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Order the beers in our Tasty Beer Club Shop",
    description: "Buy the beers you like and enjoy the taste of the Tasty Beer Club",
};

export default async function Webshop() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/beers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const beers = await response.json();

        const baseUrl = "http://localhost:8080/images/";

        return (
            <div className="container mx-auto py-8">
                <H1>Webshop</H1>
                <p className="text-lg text-gray-700">
                    Browse our selection of high-quality beers. Find your favorite taste in our webshop.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {beers.map((beer: any) => {
                        const image = beer.image ? `${baseUrl}${beer.image}` : "/default-beer.png";

                        return (
                            <li
                                key={beer.id}
                                className="border rounded-lg p-4 shadow flex flex-col items-center"
                            >
                                <Image
                                    src={image}
                                    alt={beer.name}
                                    height={250}
                                    width={250}
                                    className="object-cover mb-4"
                                />
                                <h2 className="text-xl font-bold mb-2">{beer.name}</h2>
                                <p className="text-gray-600 text-center">{beer.description}</p>
                                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                                    Add to Cart
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return (
            <div className="container mx-auto py-8">
                <H1>Webshop</H1>
                <p className="text-lg text-gray-700 text-red-600">
                    Failed to load beers. Please try again later.
                </p>
            </div>
        );
    }
}
