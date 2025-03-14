import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, CircleUserRound, Store } from "lucide-react";
import logo from "../assets/navbar.png"; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md py-4 px-6 flex items-center justify-between z-50">
      
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/shop" className="text-black font-light hover:text-gray-600 flex items-center gap-2">
            <Store className="h-6 w-6" />
            <span className="text-lg">Shop</span>
          </Link>
        </li>
      </ul>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Concept Mabelles Logo" className="h-12 w-auto" />
        </Link>
      </div>

      <ul className="flex items-center gap-6">
        <li>
          <Link to="/wishlist" className="text-black font-light hover:text-gray-600 flex items-center gap-2">
            <Heart className="h-6 w-6" />
            <span className="hidden sm:inline">Wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-black font-light hover:text-gray-600 flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="hidden sm:inline">My Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/Auth" className="bg-transparent text-black font-light px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2">
            <CircleUserRound className="h-6 w-6" />
            <span>Sign Up</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
