import {BeerType} from "@/lib/types";
import BeerCard from "@/app/components/ui/beer-card";

type BeerListProps = {
    beers: BeerType[];
};

export default function BeerList( {beers}: BeerListProps) {
    return (
        <section>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {beers.map((beer: BeerType) => {
                    return (
                        <li key={beer.id} className="flex flex-col border rounded-lg shadow  items-center p-8 ">
                            <BeerCard beer={beer} />
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}
