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

  useEffect(() => {
   
    const fetchedProducts = [
      { id: 1, name: "Men", price: 120, category: "Short Sleeve", image: M1 },
      { id: 2, name: "Men", price: 250, category: "Long Sleeve", image: M2 },
      { id: 3, name: "Men", price: 300, category: "Long Sleeve", image: M3},
      { id: 4, name: "Women", price: 300, category: "Women", image: M4},
      { id: 5, name: "Women", price: 300, category: "Women", image: M5},
      { id: 6, name: "Cloth", price: 300, category: "Cloth", image: M6},
      { id: 7, name: "Men", price: 120, category: "Short Sleeve", image: M1 },
      { id: 8, name: "Women", price: 250, category: "Clothing", image: M2 },
      { id: 9, name: "Men", price: 300, category: "Long Sleeve", image: M3},
      { id: 10, name: "Women", price: 300, category: "Women", image: M4},
      { id: 11, name: "Women", price: 300, category: "Women", image: M5},
      { id: 12, name: "Cloth", price: 300, category: "Shoes", image: M6},
      

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
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <Filters onFilter={handleFilter} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full gap-1">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shopping;
