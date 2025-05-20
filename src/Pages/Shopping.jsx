import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Filters from "../components/Filters";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    const productsRef = ref(database, "item");

    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const formatted = Object.entries(data).map(([id, item]) => ({
          id,
          ...item,
        }));

        setProducts(formatted);
        setFilteredProducts(formatted);
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.category === category));
    }
  };

  return (
    <div className="pt-20 px-4 sm:px-6"> 
      <div className="text-2xl font-bold mb-4">Shop</div>

      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <Filters onFilter={handleFilter} />
        <button
          onClick={() => setShowSizeGuide(true)}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-black transition text-sm"
        >
          Size Guide
        </button>
      </div>

    
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

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full gap-1">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
