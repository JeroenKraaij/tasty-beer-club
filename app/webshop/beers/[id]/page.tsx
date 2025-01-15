import { BeerType } from "@/lib/types";
import BeerDisplay from "@/app/components/beer-display";

type BeerPageDisplayProps = {
    params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: BeerPageDisplayProps) {
    const { id } = await params; // Await the params object

    console.log("slug", id);

    try {
        const response = await fetch(`http://localhost:8080/v1/beers/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const beer: BeerType = await response.json();

        return (
            <section className="beer-details-page max-w-3xl mx-auto">
                <BeerDisplay beers={[beer]} />
            </section>
        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return (
            <div className="error-message">
                <h1>Beer not found</h1>
                <p>Failed to load beer. Please try again later.</p>
            </div>
        );
    }
}
