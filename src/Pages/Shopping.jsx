import React, { useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const products = [
  { id: 1, name: "Men's Suit", category: "Men", price: 120, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Women's Dress", category: "Women", price: 90, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Kids' Outfit", category: "Kids", price: 50, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Men's Casual Shirt", category: "Men", price: 40, image: "https://via.placeholder.com/200" },
  { id: 5, name: "Women's Blouse", category: "Women", price: 35, image: "https://via.placeholder.com/200" },
];

const categories = ["All", "Men", "Women", "Kids"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Concept Mabelles</h1>
        
        {/* Cart Section */}
        <div className="relative">
          <button onClick={() => setShowCart(!showCart)} className="relative text-gray-800">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {showCart && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">Cart</h2>
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border-b py-2">
                      <span className="text-sm">{item.name}</span>
                      <div className="flex items-center">
                        <span className="text-sm font-semibold mr-2">${item.price}</span>
                        <button onClick={() => removeFromCart(index)} className="text-red-500">
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mt-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-md font-semibold text-gray-800 transition ${
              selectedCategory === category ? "bg-yellow-400" : "bg-gray-200 hover:bg-yellow-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold text-gray-900 mt-4">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <button
              className="w-full mt-3 bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
