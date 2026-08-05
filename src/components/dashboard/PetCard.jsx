import { Heart } from "lucide-react";

function PetCard({ image, name, breed, age }) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={image}
        alt={name}
        className="w-full h-44 object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between items-center">

          <h3 className="text-xl font-bold">
            {name}
          </h3>

          <Heart
            className="text-green-500"
            fill="currentColor"
          />

        </div>

        <p className="text-slate-500 mt-2">
          {breed}
        </p>

        <p className="text-sm text-slate-400 mt-1">
          {age}
        </p>

        <button className="mt-5 text-blue-600 font-semibold hover:underline">
          View Details →
        </button>

      </div>

    </div>
  );
}

export default PetCard;