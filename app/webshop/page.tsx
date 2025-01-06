export default function Webshop() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-4">Webshop</h1>
            <p className="text-lg text-gray-700">
                Browse our selection of high-quality products. Find what you need in our webshop.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="border rounded-lg p-4 shadow">
                    <h2 className="text-xl font-bold mb-2">Product 1</h2>
                    <p className="text-gray-600">Description of Product 1.</p>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Add to Cart
                    </button>
                </div>
                <div className="border rounded-lg p-4 shadow">
                    <h2 className="text-xl font-bold mb-2">Product 2</h2>
                    <p className="text-gray-600">Description of Product 2.</p>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Add to Cart
                    </button>
                </div>
                <div className="border rounded-lg p-4 shadow">
                    <h2 className="text-xl font-bold mb-2">Product 3</h2>
                    <p className="text-gray-600">Description of Product 3.</p>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
