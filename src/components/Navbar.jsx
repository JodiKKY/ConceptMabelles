import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, CircleUserRound, Store } from "lucide-react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/navbar.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

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
          {user ? (
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2">
                <img src={user.photoURL || "/default-avatar.png"} alt="Profile" className="h-8 w-8 rounded-full" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2">
                  <p className="text-gray-800 px-4">{user.displayName}</p>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/Auth" className="text-black font-light px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2">
              <CircleUserRound className="h-6 w-6" />
              <span>Sign Up</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;