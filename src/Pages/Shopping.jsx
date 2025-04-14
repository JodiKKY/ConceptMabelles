import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import M1 from "../assets/Display1.jpg";
import M2 from "../assets/Display 2.jpg";
import M3 from "../assets/Display3.jpg";
import M4 from "../assets/Display4.jpg";
import M5 from "../assets/Display5.jpg";
import M6 from "../assets/06.png";
import bg from "../assets/background.mp4";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: "Men", price: 120, category: "Short Sleeve", image: M1 },
      { id: 2, name: "Men", price: 250, category: "Long Sleeve", image: M2 },
      { id: 3, name: "Men", price: 300, category: "Long Sleeve", image: M3 },
      { id: 4, name: "Women", price: 300, category: "Women", image: M4 },
      { id: 5, name: "Women", price: 300, category: "Women", image: M5 },
      { id: 6, name: "Cloth", price: 300, category: "Cloth", image: M6 },
      { id: 7, name: "Men", price: 120, category: "Short Sleeve", image: M1 },
      { id: 8, name: "Women", price: 250, category: "Clothing", image: M2 },
      { id: 9, name: "Men", price: 300, category: "Long Sleeve", image: M3 },
      { id: 10, name: "Women", price: 300, category: "Women", image: M4 },
      { id: 11, name: "Women", price: 300, category: "Women", image: M5 },
      { id: 12, name: "Cloth", price: 300, category: "Shoes", image: M6 },
    ];
    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  }, []);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.category === category));
    }
  };

  return (
    <div className="p-6">
      <div className="text-2xl font-bold mb-4">Shop</div>

      {/* Filters and Size Guide Button */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <Filters onFilter={handleFilter} />
        <button
          onClick={() => setShowSizeGuide(true)}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-black transition text-sm"
        >
          Size Guide
        </button>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Size Guide</h2>
              <button
                onClick={() => setShowSizeGuide(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Small (S):</strong> Bust 32-34" / Waist 24-26"</p>
              <p><strong>Medium (M):</strong> Bust 35-37" / Waist 27-29"</p>
              <p><strong>Large (L):</strong> Bust 38-40" / Waist 30-32"</p>
              <p><strong>XL:</strong> Bust 41-43" / Waist 33-35"</p>
              <p><strong>2 Piece:</strong> Usually includes top + bottom. Fit may vary.</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full gap-1">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
