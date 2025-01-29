import type { Metadata } from "next";
import H1 from "@/app/components/ui/h1";
import { BeerType } from "@/lib/types";
import BeerList from "@/app/components/beerList";

export const metadata: Metadata = {
    title: "Order the beers in our Tasty Beer Club Shop",
    description: "Buy the beers you like and enjoy the taste of the Tasty Beer Club",
};

export default async function Webshop() {
    try {
        const response = await fetch (
            "http://localhost:8080/api/v1/beers", {
            method: "GET",
            headers: {"Content-Type": "application/json",
            },
        });
        if (response.ok) {
            const beers: BeerType[] = await response.json();
            return (
                <section className="container mx-auto py-8">
                    <H1>Webshop</H1>
                    <p className="text-lg text-gray-700">
                        Browse our selection of high-quality beers. Find your favorite taste in our webshop.
                    </p>
                    <BeerList beers={beers}/>
                </section>
            );
        } else {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return (
            <div className="container mx-auto py-8">
                <H1 className="">Webshop</H1>
                <p className="text-lg text-red-600">
                    Failed to load beers. Please try again later.
                </p>
            </div>
        );
    }
}