import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import ProductCard from "./ProductCard";

const CardStack = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5]);

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      const swipeDirection = offset > 0 ? "right" : "left";
      handleSwipe(swipeDirection);
    } else {
      x.set(0);
      y.set(0);
      rotate.set(0);
    }
    setIsDragging(false);
  };

  const handleSwipe = (direction) => {
    console.log(
      `${direction === "right" ? "Liked" : "Passed"} Product ID: ${
        products[currentIndex].id
      }`
    );
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const visibleCards = [
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto h-[600px]">
      <AnimatePresence>
        {visibleCards.map((product, index) => (
          <motion.div
            key={product.id}
            className={`absolute w-full ${
              index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"
            }`}
            style={{
              x: index === 0 ? x : 0,
              y: index === 0 ? y : index * 8,
              rotate: index === 0 ? rotate : 0,
              opacity: index === 0 ? opacity : 1,
              scale: index === 0 ? 1 : 1 - index * 0.05,
            }}
            drag={index === 0}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ProductCard
              product={product}
              isDragging={isDragging && index === 0}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe("left")}
          className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe("right")}
          className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default CardStack;
