// "use client";
//
// import { BeerType } from "@/lib/types";
//
// type BeerDisplayProps = {
//     beers: BeerType[];
// };
//
// export default function BeerDisplay({ beers }: BeerDisplayProps) {
//     return (
//         <div className="beer-display">
//             {beers.map((beer) => (
//                 <div key={beer.id} className="beer-card">
//                     <img src={beer.image} alt={beer.name} className="beer-image" />
//                     <div className="beer-details">
//                         <h2>{beer.name}</h2>
//                         <p><strong>Brand:</strong> {beer.brand}</p>
//                         <p><strong>Category:</strong> {beer.category}</p>
//                         <p><strong>Description:</strong> {beer.description}</p>
//                         <p><strong>Color:</strong> {beer.color}</p>
//                         <p><strong>Brewery:</strong> {beer.brewery}</p>
//                         <p><strong>Country:</strong> {beer.country}</p>
//                         <p><strong>ABV:</strong> {beer.abv}%</p>
//                         <p><strong>IBU:</strong> {beer.ibu}</p>
//                         <p><strong>Food Pairings:</strong> {beer.food}</p>
//                         <p><strong>Serving Temperature:</strong> {beer.temperature}</p>
//                         <p><strong>Glassware:</strong> {beer.glassware}</p>
//                         <p><strong>Taste:</strong> {beer.taste}</p>
//                         <p><strong>Price:</strong> ${beer.price.toFixed(2)}</p>
//                         <p><strong>Stock:</strong> {beer.inStock} units</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
