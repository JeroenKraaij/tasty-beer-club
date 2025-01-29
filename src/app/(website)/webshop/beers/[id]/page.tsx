import { BeerType } from "@/lib/types";
import H1 from "@/app/components/ui/h1";
import Image from "next/image";

type BeerPageDisplayProps = {
    params: { id: string };
};

export default async function ProductPage({ params }: BeerPageDisplayProps) {
    const { id } = params;

    console.log("Fetching beer data for ID:", id);

    try {
        const response = await fetch(
            `http://localhost:8080/api/v1/beers/${id}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            },
        );

        if (response.ok) {
            const beer: BeerType = await response.json();
            return (
                <section className="beer-details-page max-w-3xl mx-auto">
                    <div className="beer-card">
                        <Image src={beer.image} alt={beer.name} className="beer-image" />
                        <div className="beer-details">
                            <h2>{beer.name}</h2>
                            <p><strong>Brand:</strong> {beer.brand}</p>
                            <p><strong>Category:</strong> {beer.category}</p>
                            <p><strong>Description:</strong> {beer.description}</p>
                            <p><strong>Color:</strong> {beer.color}</p>
                            <p><strong>Brewery:</strong> {beer.brewery}</p>
                            <p><strong>Country:</strong> {beer.country}</p>
                            <p><strong>ABV:</strong> {beer.abv}%</p>
                            <p><strong>IBU:</strong> {beer.ibu}</p>
                            <p><strong>Food Pairings:</strong> {beer.food}</p>
                            <p><strong>Serving Temperature:</strong> {beer.temperature}</p>
                            <p><strong>Glassware:</strong> {beer.glassware}</p>
                            <p><strong>Taste:</strong> {beer.taste}</p>
                            <p><strong>Price:</strong> ${beer.price.toFixed(2)}</p>
                            <p><strong>Stock:</strong> {beer.inStock} units</p>
                        </div>
                    </div>
                </section>
            );
        } else {
            throw new Error(`Failed to fetch beer data: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error fetching beer data:", error);
        return (
            <div className="container mx-auto py-8">
                <H1>Webshop</H1>
                <p className="text-lg text-red-600">
                    Failed to load beer details. Please try again later.
                </p>
            </div>
        );
    }
}
