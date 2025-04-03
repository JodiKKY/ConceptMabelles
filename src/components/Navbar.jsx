import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, CircleUserRound, Store, X } from "lucide-react";
import { useCart } from "./CartContext";  // ✅ Import useCart
import logo from "../assets/navbar.png";

const Navbar = () => {
  const { cart, wishlist, addToCart, removeFromWishlist } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".cart-dropdown")) setCartOpen(false);
      if (!e.target.closest(".wishlist-dropdown")) setWishlistOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex items-center justify-between z-50">
      {/* Left Nav */}
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/shopping" className="text-black font-light hover:text-gray-600 flex items-center gap-2">
            <Store className="h-6 w-6" />
          </Link>
        </li>
      </ul>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Concept Mabelles Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Right Nav */}
      <ul className="flex items-center gap-6">
        {/* Wishlist Dropdown */}
        <li className="relative wishlist-dropdown">
          <button onClick={() => setWishlistOpen(!wishlistOpen)} className="relative flex items-center">
            <Heart className="h-6 w-6 text-black-500" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black-500 text-white text-xs px-2 rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>

          {wishlistOpen && (
            <div className="absolute right-0 mt-3 w-80 max-h-96 overflow-y-auto bg-white shadow-xl rounded-lg p-4 z-50">
              <h2 className="text-lg font-semibold text-gray-700">My Wishlist</h2>
              {wishlist.length === 0 ? (
                <p className="text-gray-500 text-sm">Your wishlist is empty.</p>
              ) : (
                wishlist.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b pb-3 last:border-b-0">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">{item.name}</p>
                      <div className="flex gap-2 mt-1">
                        <button onClick={() => addToCart(item)} className="text-xs text-yellow-600 hover:underline">
                          Add to Cart
                        </button>
                        <span className="text-gray-400">|</span>
                        <button onClick={() => removeFromWishlist(item.id)} className="text-xs text-red-500 hover:underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </li>

        
        <li className="relative cart-dropdown">
          <button onClick={() => setCartOpen(!cartOpen)} className="relative flex items-center">
            <ShoppingCart className="h-6 w-6 text-black-500" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </button>

          {cartOpen && (
            <div className="absolute right-0 mt-3 w-80 max-h-96 overflow-y-auto bg-white shadow-xl rounded-lg p-4 z-50">
              <h2 className="text-lg font-semibold text-gray-700">My Cart</h2>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b pb-3 last:border-b-0">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">{item.name}</p>
                    </div>
                  </div>
                ))
              )}
              {cart.length > 0 && (
                <div className="mt-4">
                  <Link to="/checkout" className="block w-full text-center bg-blue-500 text-white py-2 rounded-md">
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          )}
        </li>

        
        <li>
          <Link to="/Auth" className="text-black font-light px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2">
            <CircleUserRound className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
