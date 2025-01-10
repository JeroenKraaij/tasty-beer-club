
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Terms & conditions of the Tasty Beer Club",
    description: "The taste test of the Tasty Beer Club will bring to the right beer",
};




export default function Terms() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">Terms & conditions</h1>
            <p className="text-lg text-gray-700">
                Welcome to the Smaaktest page! Here you can take our taste test and discover your favorite flavors.
            </p>
        </div>
    );
}
