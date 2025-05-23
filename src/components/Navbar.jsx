import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, CircleUserRound, ShoppingBag, X, Trash2, LogOut } from "lucide-react";
import { useCart } from "./CartContext"; 
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../assets/navbar.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, wishlist, addToCart, removeFromCart, clearCart, removeFromWishlist } = useCart();

  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();}, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !e.target.closest(".cart-dropdown") &&
        !e.target.closest(".wishlist-dropdown") &&
        !e.target.closest(".profile-dropdown")
      ) {
        setCartOpen(false);
        setWishlistOpen(false);
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/auth");
  };

  const handleProfileClick = () => {
    if (!user) {
      navigate("/auth"); 
    } else {
      setProfileOpen(!profileOpen); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex items-center justify-between z-50">
      
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/shopping" className="text-black font-light hover:text-gray-600 flex items-center gap-2">
          <ShoppingBag className="h-6 w-6" />
          </Link>
        </li>
      </ul>


      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Concept Mabelles Logo" className="h-12 w-auto" />
        </Link>
      </div>


      <ul className="flex items-center gap-6">
   
        <li className="relative wishlist-dropdown">
          <button onClick={() => setWishlistOpen(!wishlistOpen)} className="relative flex items-center">
            <Heart className="h-6 w-6 text-gray-700" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>
          {wishlistOpen && (
            <div
              className="absolute right-0 mt-3 w-80 max-h-96 overflow-y-auto bg-white shadow-xl rounded-lg p-4 z-50"
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className="text-lg font-semibold text-gray-700 flex justify-between items-center">
                My Wishlist
                <button onClick={() => setWishlistOpen(false)}>
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </h2>
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
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
          {cartOpen && (
            <div
              className="absolute right-0 mt-3 w-80 max-h-96 overflow-y-auto bg-white shadow-xl rounded-lg p-4 z-50"
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className="text-lg font-semibold text-gray-700 flex justify-between items-center">
                My Cart
                <button onClick={() => setCartOpen(false)}>
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </h2>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b pb-3 last:border-b-0">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-800">{item.name}</p>
                      <div className="flex gap-2 mt-1">
                        <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline">
                          Remove 
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {cart.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                  <Link to="/checkout" className="text-white bg-blue-500 px-4 py-2 rounded-md">
                    Checkout
                  </Link>
                  <button onClick={clearCart} className="text-red-600 flex items-center gap-1">
                    <Trash2 className="w-4 h-4" />
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          )}
        </li>

       
        <li className="relative profile-dropdown">
          <button
            onClick={handleProfileClick}
            className="flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-lg"
          >
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <CircleUserRound className="h-6 w-6 text-gray-700" />
            )}
          </button>

          {profileOpen && user && (
            <div
              className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-lg p-4 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-sm">
                <div className="flex items-center gap-3 mb-3">
                  <img src={user.photoURL || "https://via.placeholder.com/40"} className="h-10 w-10 rounded-full" alt="User" />
                  <div>
                    <p className="font-medium text-gray-800">{user.displayName || "User"}</p>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 text-sm text-white bg-red-500 hover:bg-red-600 py-2 rounded-md transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
