"use client";

import Image from "next/image";
import { BeerType } from "@/lib/types";
import Link from "next/link";

type BeerCardProps = {
    beer: BeerType;
};

export default function BeerCard({ beer }: BeerCardProps) {
    console.log(beer.id);
    return (
        <Link href={`/webshop/beers/${beer.id}`}>
            <div className="flex flex-col transition hover:scale-105 active:scale-[1.02]">
                <Image
                    src={beer.image}
                    alt={beer.name}
                    height={250}
                    width={250}
                    className="object-fill h-[60%]"
                />
                <div className="flex flex-col flex-1 justify-center">
                    <h2 className="text-xl font-bold mb-2">{beer.name}</h2>
                    <p className="text-gray-600 text-center">{beer.description}</p>
                </div>
            </div>
        </Link>
    );
}
