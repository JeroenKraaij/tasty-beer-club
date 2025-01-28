import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "The Blog of the Tasty Beer Club",
    description: "The most famous articles about the beste beers",
};


export default function Blog() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-700">
                Read our latest posts about interesting topics and updates.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="border rounded-lg p-4 shadow">
                    <h2 className="text-xl font-bold mb-2">Post Title 1</h2>
                    <p className="text-gray-600">A short description of the first blog post.</p>
                    <a
                        href="/blog/post-1"
                        className="text-blue-500 hover:underline mt-2 inline-block"
                    >
                        Read More
                    </a>
                </div>
                <div className="border rounded-lg p-4 shadow">
                    <h2 className="text-xl font-bold mb-2">Post Title 2</h2>
                    <p className="text-gray-600">A short description of the second blog post.</p>
                    <a
                        href="/blog/post-2"
                        className="text-blue-500 hover:underline mt-2 inline-block"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}