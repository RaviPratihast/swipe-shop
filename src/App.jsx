import React from "react";
import CardStack from "./components/CardStack";
import { products } from "./mockData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Swipe Shop</h1>
        <CardStack products={products} />
      </div>
    </div>
  );
}

export default App;
