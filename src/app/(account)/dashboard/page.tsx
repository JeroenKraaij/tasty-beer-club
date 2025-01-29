import type {Metadata} from "next";
import H1 from "@/app/components/ui/h1";

export const metadata: Metadata = {
    title: "The Blog of the Tasty Beer Club",
    description: "The most famous articles about the beste beers",
};


export default function Dashboard () {
    return (
        <div className="container mx-auto py-8">
            <H1>Dashboard</H1>
            <p className="text-lg text-gray-700">
                Dashboard page content
            </p>
        </div>
    );
}