import { sanityFetch } from "@/sanity/lib/fetch";
import { allChefsQuery, allFoodsQuery } from "@/sanity/lib/quries";

type Food = {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  available?: boolean;
  imageUrl: string;
}

type Chef = {
  name: string;
  experience: string;
  position:string;
  specialty:string;
  description: string;
  available?: boolean;
  imageUrl: string;
}

export default async function Home() {
  // Fetch food data from Sanity
  const foods: Food[] = await sanityFetch({ query: allFoodsQuery });
  // console.log(foods);

   // Fetch Chefs data from Sanity
   const chefs: Chef[] = await sanityFetch({ query: allChefsQuery });

  return (
    <div className="px-28 py-4">
      <h4 className="text-3xl font-semibold text-center">Food Data Fetch</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food, index) => (
          <div
          key={index}
            className="bg-white rounded-md shadow-md overflow-hidden group relative"
          >
            {/* Image */}
            <img
              src={food.imageUrl}  
              alt={food.name}
              className="w-full h-50 object-cover"
              width={300}
              height={300}
            />
            {/* Food Info */}
            <div className="p-4">
              <h4 className="text-lg font-semibold">{food.name}</h4>
              <div className="text-sm text-gray-600">
                <span className="text-[#FF9F0D] font-bold">{food.originalPrice}</span>{" "}
                {food.originalPrice && (
                  <span className="line-through">
                    {food.price}
                  </span>
                )}
              </div>
              <h4 className="text-base font-semibold">{food.description}</h4>
            </div>
          </div>
        ))}
      </div>
<br/>
        {/* chef data fetch  */}
        <h4 className="text-3xl font-semibold text-center">Chef Data Fetch</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {chefs.map((chef, index) => (
    <div
      key={index}
      className="bg-white rounded-md shadow-md overflow-hidden group relative"
    >
      {/* Image */}
      <img
        src={chef.imageUrl ?? ""}
        alt={chef.name ?? ""}
        className="w-full h-50 object-cover"
        width={300}
        height={300}
      />
      {/* Chef Info */}
      <div className="p-4">
        <h4 className="text-lg font-semibold">{chef.name}</h4>
        <div className="text-sm text-gray-600">
          <span className="text-[#FF9F0D] font-bold">{chef.position}</span>
        </div>
        <p className="text-base">{chef.experience}</p>
        <p className="text-base font-semibold">{chef.specialty}</p>
        <p className="text-sm text-gray-500">{chef.description}</p>
        {chef.available !== undefined && (
          <p
            className={`text-sm font-semibold ${
              chef.available ? "text-green-500" : "text-red-500"
            }`}
          >
            {chef.available ? "Available" : "Not Available"}
          </p>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
