import type {Metadata} from "next";
import H1 from "@/app/components/htmlHeadingTag/h1";

export const metadata: Metadata = {
    title: "Doe de smaaktest van de Tasty Beer Club",
    description: "The taste test of the Tasty Beer Club will bring to the right beer",
};

export default function Smaaktest() {
    return (
        <div className="container mx-auto py-8">
            <H1>Smaaktest</H1>
            <p className="text-lg text-gray-700">
                Welcome to the Smaaktest page! Here you can take our taste test and discover your favorite flavors.
            </p>
            <div className="mt-6">
                <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
                    Start Smaaktest
                </button>
            </div>
        </div>
    );
}
