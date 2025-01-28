
import type {Metadata} from "next";
import H1 from "@/app/components/htmlHeadingTag/h1";

export const metadata: Metadata = {
    title: "Contactpage for help of the Tasty Beer Club",
    description: "Take contact with us for help",
};


export default function Contact() {
    return (
        <div className="container mx-auto py-8">
            <H1>Contact Us</H1>
            <p className="text-lg text-gray-700">
                Get in touch with us! Fill out the form below or contact us directly at:
                <br />
                <strong>Email:</strong> info@example.com
                <br />
                <strong>Phone:</strong> +123 456 7890
            </p>
            <form className="mt-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded"
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-3 py-2 border rounded"
                        rows={4}
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
