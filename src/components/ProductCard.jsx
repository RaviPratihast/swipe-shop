import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, isDragging }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { name, brand, price, originalPrice, discountPercentage, imageUrl } =
    product;

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{
        boxShadow: isDragging
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative aspect-square bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={imageUrl}
          alt={name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {discountPercentage > 0 && (
          <motion.div
            className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {discountPercentage}% OFF
          </motion.div>
        )}
      </div>

      <div className="p-5">
        <p className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wide">
          {brand}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ₹{price.toLocaleString()}
          </span>
          {originalPrice > price && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
              <span className="text-sm text-green-600 font-medium">
                Save ₹{(originalPrice - price).toLocaleString()}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
