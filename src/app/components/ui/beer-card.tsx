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
        <Link href={`/src/app/(website)/webshop/beers/${beer.id}`}>
            <div className="flex flex-col items-center transition hover:scale-105 active:scale-[1.02]">
                <Image
                    src={beer.image}
                    alt={beer.name}
                    height={350}
                    width={350}
                    className="object-fill"
                />
                <div className="flex flex-col flex-1 items-center justify-center">
                    <h2 className="text-xl font-bold mb-2">{beer.name}</h2>
                    <p className="text-gray-600 text-center">{beer.description}</p>
                    <p className="text-gray-600 text-center font-bold text-xl pt-3">€ {beer.price}</p>
                </div>
            </div>
        </Link>
    );
}
