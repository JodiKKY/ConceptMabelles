import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons"; 
import logo from "../assets/navbar.png"; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
      {/* Left Section - Shop */}
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/shop" className="text-white hover:text-gray-300 flex items-center gap-2">
            <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
            <span className="text-lg font-medium">Shop</span>
          </Link>
        </li>
      </ul>

      {/* Center - Logo + Brand Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Concept Mabelles Logo" className="h-12 w-auto" />
        <span className="text-xl font-bold text-white">Concept Mabelles</span>
      </Link>

      {/* Right Section - Wishlist, Cart, Signup */}
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/wishlist" className="text-white hover:text-gray-300 flex items-center gap-2">
            <FontAwesomeIcon icon={faHeart} className="text-lg" />
            <span className="hidden sm:inline">Wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-white hover:text-gray-300 flex items-center gap-2">
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
            <span className="hidden sm:inline">My Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/signup" className="bg-transparent text-grey-600 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="text-lg" />
            <span>Sign Up</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
