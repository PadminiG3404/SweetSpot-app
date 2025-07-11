import React from "react";

const CakeCard = ({ cake }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="w-full h-48 overflow-hidden rounded-md bg-latte/20 flex items-center justify-center mb-4">
        <img
          src={cake.image}
          alt={cake.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-lg font-semibold text-caramel mb-1">{cake.name}</h3>
      <p className="text-mocha font-medium text-md mb-1">{cake.price}</p>
      <p className="text-sm text-mocha/80 mb-2 line-clamp-3">{cake.description}</p>

      <p className="text-xs text-mocha/70 mb-4">
        <span className="font-semibold">Ingredients:</span> {cake.ingredients.join(", ")}
      </p>

      <button className="mt-auto w-full px-4 py-2 bg-caramel hover:bg-latte text-white font-medium rounded-lg transition">
        Add to Cart
      </button>
    </div>
  );
};

export default CakeCard;
