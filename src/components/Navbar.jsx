import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, CircleUserRound, Store, X } from "lucide-react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/navbar.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Men's Traditional Shirt",
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Ladies' Kente Dress",
      image: "https://via.placeholder.com/60",
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
      if (!e.target.closest(".wishlist-dropdown")) {
        setWishlistOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    console.log("Add to Cart:", item); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md py-4 px-6 flex items-center justify-between z-50">
      {/* Left Nav */}
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/Shopping" className="text-black font-light hover:text-gray-600 flex items-center gap-2">
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
          <button
            onClick={() => setWishlistOpen(!wishlistOpen)}
            className="text-black font-light hover:text-gray-600 flex items-center gap-2"
          >
            <Heart className="h-6 w-6" />
          
          </button>

          {wishlistOpen && (
            <div className="absolute right-0 mt-3 w-80 max-h-96 overflow-y-auto bg-white shadow-xl rounded-lg p-4 space-y-3 z-50">
              <h2 className="text-lg font-semibold text-gray-700">My Wishlist</h2>
              {wishlistItems.length === 0 ? (
                <p className="text-gray-500 text-sm">Your wishlist is empty.</p>
              ) : (
                wishlistItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b pb-3 last:border-b-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">{item.name}</p>
                      <div className="flex gap-2 mt-1">
                        <button
                          onClick={() => addToCart(item)}
                          className="text-xs text-yellow-600 hover:underline"
                        >
                          Add to Cart
                        </button>
                        <span className="text-gray-400">|</span>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="text-xs text-red-500 hover:underline"
                        >
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

        
        <li>
          <Link to="/cart" className="text-black font-light hover:text-gray-600 flex items-center gap-2">
            <ShoppingCart className="h-6 w-6" />
            
          </Link>
        </li>

        
        <li>
          {user ? (
            <div className="relative dropdown">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2">
                <img src={user.photoURL || "/default-avatar.png"} alt="Profile" className="h-8 w-8 rounded-full" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2">
                  <p className="text-gray-800 px-4">{user.displayName}</p>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/Auth" className="text-black font-light px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2">
              <CircleUserRound className="h-6 w-6" />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
