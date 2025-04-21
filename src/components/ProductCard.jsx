import React from "react";

const ProductCard = ({ product }) => {
  const { name, brand, price, originalPrice, discountPercentage, imageUrl } =
    product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-square">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {discountPercentage}% OFF
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-gray-600 mb-1">{brand}</p>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Price Container */}
        <div className="flex items-center gap-2">
          {/* Current Price */}
          <span className="text-lg font-bold text-gray-900">
            ₹{price.toLocaleString()}
          </span>

          {/* Original Price */}
          {originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              ₹{originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
