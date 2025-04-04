import React from "react";
import { useCart } from "../components/CartContext";
import { Heart, ShoppingCart } from "lucide-react";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist } = useCart();

  return (
    <div className="group bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300  w-full ">
      
      {/* Product Image */}
      {/* <div className="relative w-full h-[250px] bg-gray-100 flex items-center justify-center"> */}
      <div className="relative flex items-center justify-center">
        <div>
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 prImg"
        />
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => addToWishlist(product)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition duration-300"
        >
          <Heart className="w-5 h-5 text-gray-700 group-hover:text-white" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-3 text-center">
        <h3 className="text-[13px] font-light text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-[12px] mt-1">GH₵ {product.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-2 flex items-center justify-center w-full bg-gray-200 text-gray-900 py-2 rounded-lg text-[12px] font-medium hover:bg-gray-700 hover:text-white transition duration-300"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
