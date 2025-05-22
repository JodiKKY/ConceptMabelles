import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { Heart, ShoppingCart, Plus } from "lucide-react";

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist } = useCart();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize || !selectedType) {
      alert("Please select a size and type.");
      return;
    }
    addToCart({ ...product, selectedSize, selectedType });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ ...product, selectedSize, selectedType });
  };

  return (
    <div className="group bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-black rounded-lg relative">
      {/* Product Image */}
      <div className="relative flex items-center justify-center h-[400px] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
        >
          <Heart className="w-5 h-5 text-gray-700 group-hover:text-white" />
        </button>

        {/* Plus Button (Toggle Options) */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="absolute top-3 left-3 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition"
        >
          <Plus className="w-5 h-5" />
        </button>

        {/* Hover Options Panel */}
        {showOptions && (
          <div className="absolute top-14 left-3 bg-white p-4 rounded-lg shadow-md z-10 w-40 text-black text-sm space-y-3">
            <div>
              <p className="font-semibold">Size</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <span
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2 py-1 border rounded cursor-pointer transition ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold">Type</p>
              <div className="flex gap-2 mt-1">
                {["Top", "Two Piece"].map((type) => (
                  <span
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-2 py-1 border rounded cursor-pointer transition ${
                      selectedType === type
                        ? "bg-black text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

   
      <div className="p-3 text-center">
        <h3 className="text-[13px] font-light text-gray-900 truncate">{product.name}</h3>
        <div className="text-[12px] mt-1">
          {product.originalPrice && (
            <span className="line-through text-gray-400 mr-1">
              GH₵ {product.originalPrice}
            </span>
          )}
          <span className="text-red-500 font-semibold">GH₵ {product.price}</span>
        </div>

  
        <button onClick={handleAddToCart} className="mt-2 flex items-center justify-center w-full bg-gray-200 text-gray-900 py-2 rounded-lg text-[12px] font-medium hover:bg-gray-700 hover:text-white transition"  >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart.
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
