"use client";

import { useState, useEffect } from "react";

const images = [
    "/SLIDE_01.jpg",
    "/SLIDE_02.jpg",

];

export default function HeroBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            <div
                className="absolute inset-0 transition-transform duration-1000"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                <div className="flex w-full">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    Tasty Beer{" "}
                    <span className="text-[#FFD700]">Club</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl mt-4">
                    Discover the finest selection of beers and join the most exclusive club.
                </p>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                &#8594;
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full cursor-pointer ${
                            index === currentIndex
                                ? "bg-[#FFD700]"
                                : "bg-gray-400"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
