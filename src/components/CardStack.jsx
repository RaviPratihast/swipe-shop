import React, { useState } from "react";
import ProductCard from "./ProductCard";

const CardStack = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right"); 

  const handleSwipe = (direction) => {
    setDirection(direction);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

 
  const visibleCards = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px]">
      {visibleCards.map((product, index) => (
        <div
          key={product.id}
          className={`absolute w-full transition-all duration-300 ${
            index === 0
              ? "z-30 transform translate-y-0"
              : index === 1
              ? "z-20 transform translate-y-4"
              : "z-10 transform translate-y-8"
          }`}
        >
          <div
            className={`${
              index === 0 ? "cursor-pointer" : "pointer-events-none"
            }`}
            onClick={() => index === 0 && handleSwipe("right")}
          >
            <ProductCard product={product} />
          </div>
        </div>
      ))}

   
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-40">
        <button
          onClick={() => handleSwipe("left")}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => handleSwipe("right")}
          className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardStack;
